describe('Bayzat', function () {

     it('Login to Bayzat', function () {
          cy.visit('www.bayzat.com');
          cy.title().should('contain', 'Bayzat');
          
      })
     


      it('Login to Bayzat', function () {
          cy.get('div#gatsby-focus-wrapper a > span.style__TextWrap-sc-58yt2r-1.hGkEF > span').click();
          cy.get('input[name="username"]').type('test+testcompany@bayzat.com');
          cy.get('input[name="password"]').type('123456789');
          cy.get('form > button').click();
          
     })


     it('View Team', function () {
          cy.wait(10000);
          cy.get('li:nth-child(20) > a > span').click();    //View team
          cy.get('[class="fa fa-fw fa-square-o"]').eq(2).click()
          // cy.get(' #ember143 > .main-menu__title').click();  //add employee
          // cy.wait(10000);
          // cy.get('[class="btn btn-primary btn-lg btn-labeled fa fa-user-plus mar-ver ember-view"]').click()
          // cy.get('input[name="firstName"]').type('test')
     })
    
     it('Add employee', function () {
          cy.get('li:nth-child(21) > a').click();  //add employee
         cy.wait(10000);
           cy.get('[class="btn btn-primary btn-lg btn-labeled fa fa-user-plus mar-ver ember-view"]').click()
        //cy.get('input[name="firstName"]').type('test')
      })

      
     // it('validates and formats first name', () => {
          
     //      cy.get('li:nth-child(1) > a > span').click()
     //      cy.get('li:nth-child(21) > a > span').click() //add employee

     //      cy.wait(10000);
     //       cy.get('[class="btn btn-primary btn-lg btn-labeled fa fa-user-plus mar-ver ember-view"]').click()
     //    cy.get('input[name="firstName"]').type('test')
     //    })
     
});


