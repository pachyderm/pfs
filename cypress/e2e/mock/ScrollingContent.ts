const inspectListItemScrolling = (testId: string, expectedLength: number) => {
  cy.findAllByTestId(testId).should('have.length', expectedLength);
  cy.findAllByTestId(testId).first().should('be.visible');
  cy.findAllByTestId(testId).last().should('not.be.visible');
  cy.findAllByTestId(testId).last().scrollIntoView().should('be.visible');
  cy.isInViewport(() => cy.findAllByTestId(testId).last());
};

describe(
  'Console Scrolling Content',
  {
    viewportHeight: 500,
    viewportWidth: 1000,
  },
  () => {
    beforeEach(() => {
      cy.visit('/');
    });

    // These tests ensure that scrollable content involving long lists of items don't cut off any items at the bottom when scrolling

    it('should display the last item properly when scrolling a list of projects', () => {
      cy.findAllByRole('row').should('have.length', 9);
      cy.findByText('Data-Cleaning-Process').should('be.visible');
      cy.findByText('Trait-Discovery').should('not.be.visible');
      cy.findByTestId('Landing__view').scrollTo('bottom');
      cy.findByText('Trait-Discovery')
        .parent()
        .parent()
        .parent()
        .parent()
        .should('be.visible');
      cy.isInViewport(() =>
        cy.findByText('Trait-Discovery').parent().parent().parent().parent(),
      );
    });

    it('should display the last item properly when scrolling a list of project jobs', () => {
      cy.findByText('Solar-Power-Data-Logger-Team-Collab')
        .scrollIntoView()
        .click();
      inspectListItemScrolling('JobListItem__job', 9);
    });

    it('should display the last item properly when scrolling a list of job sets', () => {
      cy.findByRole('heading', {
        name: /Solar-Power-Data-Logger-Team-Collab/i,
      })
        .parent()
        .findByRole('button', {
          name: /view/i,
        })
        .scrollIntoView()
        .click();
      cy.findByText('Jobs').click();
      inspectListItemScrolling('RunsList__row', 9);
    });

    it('should display the last item properly when scrolling a list of repos', () => {
      cy.findByRole('heading', {
        name: /Trait-Discovery/i,
      })
        .parent()
        .findByRole('button', {
          name: /view/i,
        })
        .scrollIntoView()
        .click();
      cy.findByText('Repositories').click();
      inspectListItemScrolling('RepositoriesList__row', 34);
    });

    it('should display the last item properly when scrolling a list of pipelines', () => {
      cy.findByRole('heading', {
        name: /Trait-Discovery/i,
      })
        .parent()
        .findByRole('button', {
          name: /view/i,
        })
        .scrollIntoView()
        .click();
      cy.findByText('Pipeline Steps').click();
      inspectListItemScrolling('PipelineStepsList__row', 27);
    });

    it('should display the last item properly when scrolling info from pipelines in lineage view', () => {
      cy.findByRole('heading', {
        name: /Solar-Power-Data-Logger-Team-Collab/i,
      })
        .parent()
        .findByRole('button', {
          name: /view/i,
        })
        .scrollIntoView()
        .click();
      cy.findByText('DAG').click();
      cy.findByText('Pipeline').click({force: true});
      cy.findByText('Pipeline Info').click();
      cy.get(`[aria-labelledby="info"]`)
        .children()
        .first()
        .children()
        .should('have.length', 20);
      cy.get(`[aria-labelledby="info"]`)
        .children()
        .first()
        .children()
        .eq(1)
        .should('be.visible');
      cy.get(`[aria-labelledby="info"]`)
        .children()
        .first()
        .children()
        .last()
        .should('not.be.visible');
      cy.findByTestId('PipelineDetails__scrollableContent').scrollTo('bottom');
      cy.get(`[aria-labelledby="info"]`)
        .children()
        .first()
        .children()
        .last()
        .should('be.visible');
      cy.isInViewport(() =>
        cy.get(`[aria-labelledby="info"]`).children().first().children().last(),
      );
    });

    it('should display the last item properly when scrolling commits from repos in lineage view', () => {
      cy.findByRole('heading', {
        name: /Solar-Power-Data-Logger-Team-Collab/i,
      })
        .parent()
        .findByRole('button', {
          name: /view/i,
        })
        .scrollIntoView()
        .click();
      cy.findByText('DAG').click();
      cy.findByText('cron').click();
      cy.findAllByTestId('CommitList__commit').should('have.length', 5);
      cy.findAllByTestId('CommitList__commit').first().should('not.be.visible');
      cy.findAllByTestId('CommitList__commit').last().should('not.be.visible');
      cy.findAllByTestId('CommitList__commit')
        .last()
        .scrollIntoView()
        .should('be.visible');
      cy.isInViewport(() => cy.findAllByTestId('CommitList__commit').last());
    });

    it('should display the last item properly when scrolling pipeline specs in lineage view', () => {
      it('should display the last item properly when scrolling pipeline specs in lineage view', () => {
        /* 
      The app seems to require a full loading of `/`. Otherwise it will redirect
      when visiting '/project/1/pipelines/montage'. This was happening when
      Cypress had to do a full page load to skip the tutorial.
      Since that is temporarily disabled, we can get the same behavior by just
      waiting for some page text to render. I think this is happening because the
      app needs to load an auth token and put it in local storage.
      */
        cy.findByText('Projects');
        cy.visit('/project/Solar-Panel-Data-Sorting/pipelines/montage');

        cy.findByText('Spec').click();
        cy.findByText('priorityClassName:').should('not.be.visible');
        cy.findByTestId('PipelineDetails__scrollableContent').scrollTo(
          'bottom',
        );
        cy.findByText('priorityClassName:').should('be.visible');
        cy.isInViewport(() => cy.findByText('priorityClassName:'));
      });
    });
  },
);
