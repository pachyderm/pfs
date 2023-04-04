package cronutil

import (
  "testing"
  "time"
)

var (
  year9999, _ = time.Parse(time.DateOnly, "9999-01-01")
)


func TestNever(t *testing.T) {
  expr := "@never"
  schedule, err := ParseCronExpression(expr)
  if err != nil {
    t.Fatalf("cron expression \"%s\" error %s", expr, err.Error())
  }
  nextTime := schedule.Next(time.Now())
  if ! nextTime.Equal(year9999) {
    t.Errorf("next time for \"%s\" returned \"%s\" expected \"%s\"", expr, nextTime, year9999)
  }
}

func TestNeverSpaces(t *testing.T) {
  expr := "   @never      "
  schedule, err := ParseCronExpression(expr)
  if err != nil {
    t.Fatalf("cron expression \"%s\" error %s", expr, err.Error())
  }
  nextTime := schedule.Next(time.Now())
  if ! nextTime.Equal(year9999) {
    t.Errorf("next time for \"%s\" returned \"%s\" expected \"%s\"", expr, nextTime, year9999)
  }
}

func TestOneMinuteField(t *testing.T) {
  expr := "* 1 * * *"
  schedule, err := ParseCronExpression(expr)
  if err != nil {
    t.Fatalf("cron expression \"%s\" error %s", expr, err.Error())
  }
  now := time.Now().Truncate(time.Minute)
  nextTime := schedule.Next(now).Truncate(time.Minute)
  if nextTime.Before(now.Add(time.Minute)) {
    t.Errorf("next time for \"%s\" after now \"%s\" returned \"%s\" expected \"%s\"", expr, now, nextTime, now.Add(time.Minute))
  }
}

func TestEveryOneMinute(t *testing.T) {
  expr := "@every 1m"
  schedule, err := ParseCronExpression(expr)
  if err != nil {
    t.Fatalf("cron expression \"%s\" error %s", expr, err.Error())
  }
  now := time.Now().Truncate(time.Minute)
  nextTime := schedule.Next(now).Truncate(time.Minute)
  if nextTime.Before(now.Add(time.Minute)) {
    t.Errorf("next time for \"%s\" after now \"%s\" returned \"%s\" expected \"%s\"", expr, now, nextTime, now.Add(time.Minute))
  }
}

func TestInvalidSixFields(t *testing.T) {
  expr := "* * * * * *"
  schedule, err := ParseCronExpression(expr)
  if err == nil {
    t.Fatalf("unexpected time \"%s\" returned for invalid cron expression \"%s\"", schedule, expr)
  }
}

