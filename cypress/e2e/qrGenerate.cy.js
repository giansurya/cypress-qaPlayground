describe('QR Generate', () => {
  beforeEach(() => {
      cy.visit('https://qaplayground.dev/apps/qr-code-generator/')
      cy.viewport('macbook-16')
  });

  it('Assert Images Generated', () => {
      cy.contains("QR Code Generator").should("be.visible");
      cy.get('[placeholder="Enter text or URL"]').type("https://shorturl.at/oHNW4");
      cy.contains("Generate QR Code").click();
      
      const imageLocator = cy.get(".qr-code img");
      imageLocator.should("be.visible");
      imageLocator.screenshot();

      //Then, see Screenshots folder for the result
  })
});