describe('mount', () => {
  beforeEach(() => {
    cy.resetApp();
    cy.isAppReady();
    cy.unmountAllRepos();
    cy.openMountPlugin();
    cy.findAllByText('Mount');
    cy.wait(3000);
  });

  it('should mount and unmount pachyderm repos', () => {
    cy.findAllByText('Mount').first().click();
    cy.findAllByText('Unmount').first().click();
    cy.findAllByText('Mount').should('have.length', 1);
  });

  it('file browser should show correct breadcrumbs', () => {
    cy.findByText('/ pfs').should('have.length', 1);
    cy.findAllByText('Mount').first().click();
    cy.findAllByText('Unmount').should('have.length', 1);
    cy.findAllByText('default_images').first().click();

    cy.get('[id="pachyderm-mount"] div.jp-FileBrowser-crumbs')
      .first()
      .invoke('text')
      .should('eq', '/ pfs/default_images/');
  });

  it("should correctly mount a repo's branch", () => {
    cy.findByTestId('ListItem__select').select('branch');
    cy.findAllByText('Mount').first().click();
    cy.findAllByText('Unmount').should('have.length', 1);
    cy.findAllByText('default_images_branch').first().click();
    cy.findAllByText('branch.png').should('have.length', 1);
  });

  it('should open mounted directory in the file browser on click', () => {
    cy.findAllByText('Mount').first().click();
    cy.findAllByText('Unmount').should('have.length', 1);
    cy.findAllByText('default_images').first().click();
    cy.findAllByText('liberty.png').should('have.length', 1);
  });

  it('file browser should show correct right click actions', () => {
    cy.findByText('Mount').first().click();
    cy.findAllByText('Unmount').should('have.length', 1);
    cy.findAllByText('default_images').first().click();
    cy.findAllByText('liberty.png').first().rightclick();
    cy.get('ul.lm-Menu-content.p-Menu-content')
      .children()
      .should('have.length', 2)
      .first()
      .should('have.text', 'Open')
      .next()
      .should('have.text', 'Copy Path');
  });

  it('file browser should have loading attribute', () => {
    cy.findByText('Mount').first().click();
    cy.findAllByText('Unmount').should('have.length', 1);
    cy.findAllByText('default_images').first().click();
    cy.get('ul.jp-DirListing-content[loading]').should('have.length', 1);
  });
});
