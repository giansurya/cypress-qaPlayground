describe('Open New Tab and Assert Content on New Tab', () => {
  beforeEach(() => {
      cy.visit('https://qaplayground.dev/apps/new-tab/')
      cy.viewport('macbook-16')
  });

  it('Open New Tab', () => {
      cy.get('#open').should('be.visible')
      cy.get('#open').should('contain', 'Open New Tab')
      cy.get('#open').invoke('removeAttr', 'target').click()
      cy.get('#wrapper').should('contain', 'Welcome to the new page!')
      cy.go('back')
      cy.get('#open').should('be.visible')
  })
});