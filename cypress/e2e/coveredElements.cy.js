describe('Covered Elements', () => {
  beforeEach(() => {
      cy.visit('https://qaplayground.dev/apps/covered/')
      cy.viewport('macbook-16')
  });

  it('Assert Bottom Content', () => {
      cy.get('#info').should('be.visible')
      cy.get('#info').should('contain', 'Click the button below')
      cy.get('.wrapper').scrollTo('bottom')
      cy.get('#fugitive').should('be.visible')
      cy.get('#fugitive').should('contain', '🐦You found me!')
      cy.get('#fugitive').screenshot()
      cy.get('#fugitive').click()
      cy.get('.wrapper').scrollTo('top')
      cy.get('#info').should('contain', 'Mission accomplished')
      cy.get('#info').screenshot()
  })
});