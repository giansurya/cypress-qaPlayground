describe('Close Modal and Assert the Content', () => {
  beforeEach(() => {
      cy.reload()
      cy.visit('https://qaplayground.dev/apps/onboarding-modal/#')
      cy.viewport('macbook-16')
      cy.clearLocalStorage()
  });

  it('Assert Text On Modal Pop Up Close', () => {
      cy.contains('a', 'Welcome on board!').should('be.visible')
      cy.get('.menu-btn').click()
      cy.get('.title').should('contain', 'Welcome Peter Parker! ')
      cy.get('.menu-btn').click()
      cy.contains('a', 'Welcome on board!').should('be.visible')
  })
});