describe('Bayzat', function() {
    
    it('Navigate to Bayzat', function() {
    cy.visit('www.bayzat.com');
      cy.title().should('contain', 'Bayzat 1');
    });

    it('Navigate to Bayzat', function() {
      cy.visit('www.bayzat.com');
        cy.title().should('contain', 'Bayzat 1');
      });

      it('Navigate to Bayzat', function() {
        cy.visit('www.bayzat.com');
          cy.title().should('contain', 'Bayzat 1');
        });
  });