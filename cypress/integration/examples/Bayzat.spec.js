describe('Bayzat', function () {

     it('Navigate to Bayzat', function () {

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
          cy.get(' #ember143 > .main-menu__title').click();  //add employee
         cy.wait(10000);
          cy.get('[class="btn btn-primary btn-lg btn-labeled fa fa-user-plus mar-ver ember-view"]').click()
          cy.get('input[name="firstName"]').type('test')
      })

     it('View Team', function () {
          cy.wait(10000);
          cy.get('#ember141 > .main-menu__title').click();   //View team
          cy.get('[class="fa fa-fw fa-square-o"]').eq(2).click()
     })

     

     
});


