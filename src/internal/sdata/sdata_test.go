package sdata

import (
	"bytes"
	"context"
	"database/sql"
	"fmt"
	"io"
	"math/rand"
	"reflect"
	"testing"
	"time"

	fuzz "github.com/google/gofuzz"
	"github.com/pachyderm/pachyderm/v2/src/internal/pachsql"
	"github.com/pachyderm/pachyderm/v2/src/internal/require"
)

// TestFormatParse is a round trip from a Tuple through formatting and parsing
// back to a Tuple again.
func TestFormatParse(t *testing.T) {
	testCases := []struct {
		Name string
		NewW func(w io.Writer, fieldNames []string) TupleWriter
		NewR func(r io.Reader, fieldNames []string) TupleReader
	}{
		{
			Name: "CSV",
			NewW: func(w io.Writer, _ []string) TupleWriter {
				return NewCSVWriter(w, nil)
			},
			NewR: func(r io.Reader, _ []string) TupleReader {
				return NewCSVParser(r)
			},
		},
		{
			Name: "JSON",
			NewW: func(w io.Writer, fieldNames []string) TupleWriter {
				return NewJSONWriter(w, fieldNames)
			},
			NewR: func(r io.Reader, fieldNames []string) TupleReader {
				return NewJSONParser(r, fieldNames)
			},
		},
	}
	newTuple := func() Tuple {
		a := int64(0)
		b := float64(0)
		c := ""
		d := sql.NullInt64{}
		e := false
		f := sql.NullString{}
		return Tuple{&a, &b, &c, &d, &e, &f}
	}
	fieldNames := []string{"a", "b", "c", "d", "e", "f"}
	for _, tc := range testCases {
		t.Run(tc.Name, func(t *testing.T) {
			const N = 10
			buf := &bytes.Buffer{}
			fz := fuzz.New()
			fz.RandSource(rand.NewSource(0))
			fz.Funcs(
				func(ti *time.Time, co fuzz.Continue) {
					*ti = time.Now()
				},
				func(x *sql.NullInt64, co fuzz.Continue) {
					if co.RandBool() {
						x.Valid = true
						x.Int64 = co.Int63()
					} else {
						x.Valid = false
					}
				},
				func(x *sql.NullString, co fuzz.Continue) {
					n := co.Intn(10)
					if n < 3 {
						x.Valid = true
						x.String = co.RandString()
					} else if n < 6 {
						x.Valid = true
						x.String = ""
					} else {
						x.Valid = false
					}
				},
				fuzz.UnicodeRange{First: '!', Last: '~'}.CustomStringFuzzFunc(),
			)

			var expected []Tuple
			w := tc.NewW(buf, fieldNames)
			for i := 0; i < N; i++ {
				x := newTuple()
				for i := range x {
					fz.Fuzz(x[i])
				}
				err := w.WriteTuple(x)
				require.NoError(t, err)
				expected = append(expected, x)
			}
			require.NoError(t, w.Flush())

			var actual []Tuple
			r := tc.NewR(buf, fieldNames)
			for i := 0; i < N; i++ {
				y := newTuple()
				err := r.Next(y)
				require.NoError(t, err)
				actual = append(actual, y)
			}
			require.Len(t, actual, len(expected))
			for i := range actual {
				require.Equal(t, expected[i], actual[i])
			}
		})
	}
}

// TestMaterializeSQL checks that rows can be materialized from all the supported databases,
// with all the supported writers.
// It does not check that the writers themselves output in the correct format.
func TestMaterializeSQL(t *testing.T) {
	writerSpecs := []struct {
		Name string
		New  func(io.Writer, []string) TupleWriter
	}{
		{
			"JSON",
			func(w io.Writer, names []string) TupleWriter {
				return NewJSONWriter(w, names)
			},
		},
		{
			"CSV",
			func(w io.Writer, names []string) TupleWriter {
				return NewCSVWriter(w, names)
			},
		},
	}
	for _, dbSpec := range supportedDBSpecs {
		for _, writerSpec := range writerSpecs {
			testName := fmt.Sprintf("%v-%s", dbSpec, writerSpec.Name)
			t.Run(testName, func(t *testing.T) {
				db, _, tableName := dbSpec.create(t)
				require.NoError(t, pachsql.CreateTestTable(db, tableName, dbSpec.testRow()))
				nRows := 10
				if err := pachsql.GenerateTestData(db, tableName, nRows, dbSpec.testRow()); err != nil {
					t.Fatalf("could not setup database: %v", err)
				}
				rows, err := db.Query(fmt.Sprintf(`SELECT * FROM %s`, tableName))
				require.NoError(t, err)
				defer rows.Close()
				buf := &bytes.Buffer{}
				colNames, err := rows.Columns()
				require.NoError(t, err)
				w := writerSpec.New(buf, colNames)
				_, err = MaterializeSQL(w, rows)
				require.NoError(t, err)
				t.Log(buf.String())
			})
		}
	}
}

func TestSQLTupleWriter(t *testing.T) {
	for _, dbSpec := range supportedDBSpecs {
		t.Run(dbSpec.String(), func(t *testing.T) {
			var (
				ctx              = context.Background()
				db, _, tableName = dbSpec.create(t)
			)
			require.NoError(t, pachsql.CreateTestTable(db, tableName, dbSpec.testRow()))
			tableInfo, err := pachsql.GetTableInfo(ctx, db, fmt.Sprintf("%s.%s", dbSpec.schema(), tableName))

			require.NoError(t, err)

			tx, err := db.Beginx()
			require.NoError(t, err)
			defer tx.Rollback()

			// Generate fake data
			fz := fuzz.New()
			fz.RandSource(rand.NewSource(0))
			fz.Funcs(func(ti *time.Time, co fuzz.Continue) {
				// for mysql compatibility
				*ti = time.Now()
			})
			fz.Funcs(func(x *interface{}, co fuzz.Continue) {
				switch co.Intn(6) {
				case 0:
					*x = int16(co.Int())
				case 1:
					*x = int32(co.Int())
				case 2:
					*x = int64(co.Int())
				case 3:
					*x = co.Float32()
				case 4:
					*x = co.Float64()
				case 5:
					*x = co.RandString()
				}
			})

			tuple := newTupleFromTestRow(dbSpec.testRow())
			w := NewSQLTupleWriter(tx, tableInfo)
			nRows := 3
			for i := 0; i < nRows; i++ {
				for j := range tuple {
					fz.Fuzz(tuple[j])
				}
				// key part we are testing
				require.NoError(t, w.WriteTuple(tuple))
			}
			require.NoError(t, w.Flush())
			require.NoError(t, tx.Commit())

			// assertions
			var count int
			require.NoError(t, db.QueryRow(fmt.Sprintf("select count(*) from %s", tableName)).Scan(&count))
			require.Equal(t, nRows, count)
		})
	}
}

func TestCSVNull(t *testing.T) {
	buf := &bytes.Buffer{}
	w := NewCSVWriter(buf, nil)
	row := Tuple{
		&sql.NullString{String: "null", Valid: true},
		&sql.NullString{String: `""`, Valid: true},
		&sql.NullString{String: "", Valid: false},
		&sql.NullString{String: "", Valid: true},
	}
	expected := `null,"""""",,""` + "\n"
	w.WriteTuple(row)
	w.Flush()
	require.Equal(t, expected, buf.String())

	r := NewCSVParser(buf)
	row2 := Tuple{
		&sql.NullString{},
		&sql.NullString{},
		&sql.NullString{},
		&sql.NullString{},
	}
	err := r.Next(row2)
	require.NoError(t, err)
	require.Equal(t, row, row2)
}

// func setupTable(t testing.TB, db *pachsql.DB, name string, n int) {
// 	require.NoError(t, pachsql.CreateTestTable(db, name, pachsql.TestRow{}))
// 	require.NoError(t, pachsql.GenerateTestData(db, name, n))
// }

func newTupleFromTestRow(row interface{}) Tuple {
	var process func(reflect.Type) Tuple
	process = func(t reflect.Type) Tuple {
		var rr Tuple
		if t.Kind() == reflect.Ptr {
			return process(t.Elem())
		}
		for i := 0; i < t.NumField(); i++ {
			f := t.Field(i)
			if f.Anonymous && f.Type.Kind() == reflect.Struct {
				rr = append(rr, process(f.Type)...)
				continue
			}
			rr = append(rr, reflect.New(f.Type).Interface())
		}
		return rr
	}
	return process(reflect.TypeOf(row))
}
