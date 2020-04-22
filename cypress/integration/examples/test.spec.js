
describe('My Favorites Tab', () => {
    
    before(function()  {

        cy.fixture('example').then(function(data){
            this.data=data
            
        })
    })


    before(() => {
        cy.visit('www.bayzat.com');
        cy.title().should('contain', 'Bayzat');
        cy.get('div#gatsby-focus-wrapper a > span.style__TextWrap-sc-58yt2r-1.hGkEF > span').click();
    })

    beforeEach(() => {
        cy.get('input[name="username"]').type('test+testcompany@bayzat.com')
        cy.get('input[name="password"]').type('123456789')
        cy.get('form > button').click();
        cy.wait(10000)
        cy.url().should('eq', 'https://www.bayzat.com/enterprise/dashboard/index');
    })

    // it('View Team', function () {
    //     //cy.get('input[name="username"]').type(this.data.firstname)
    //     cy.wait(10000);
    //     cy.get('li:nth-child(20) > a > span').click() //View team
    //     cy.get('[class="fa fa-fw fa-square-o"]').eq(1).click()
    //     cy.get('[class="table hovered-rows loader  js-employee-list"]').should('be.visible')

    // })


    it('Add Employee', function () {
        for (i = 1; i <= 2; i++) {
            cy.wait(10000);
            cy.get('li:nth-child(21) > a > span').click() //add employee
            cy.wait(10000);
            cy.get('[class="btn btn-primary btn-lg btn-labeled fa fa-user-plus mar-ver ember-view"]').click()
            cy.get('input[name="preferredName"]').type(this.data.PreferredName)
            cy.get('input[name="firstName"]').type(this.data.firstname)
            cy.get('input[name="lastName"]').type(this.data.LastName)

            cy.get('input[name="dateOfBirthFormatted"]').type('18/05/1990')
            cy.wait(5000)
            cy.get('input[name="preferredName"]').click()
            cy.get('[class="ember-power-select-placeholder"]').eq(1).click().type('{downarrow}')
            cy.wait(50000)
            cy.get('label > span > i').click()
            cy.get('div.col-sm-11.col-md-10.col-lg-8.mar-ver > div > div > button:nth-child(2)').click()
            cy.get('div.media-body > p').should('be.visible')      //verify submission message
        }
    })

    // // it('Select Employee', function () {
    // //     cy.wait(10000);
    // //     cy.get('li:nth-child(20) > a > span').click();  //View team
    // //     cy.get('[class="table hovered-rows loader  js-employee-list"]').contains('td', 'Test 2').should('be.visible').click()
    // //     cy.wait(5000)
    // //     cy.get('[class="js-formatted-person-name ember-view"]').contains('Test 2').should('be.visible')
    // // })


    // // it('Search Employee', function () {
    // //     cy.wait(10000);
    // //     cy.get('li:nth-child(20) > a > span').click();  //View team
    // //     cy.get('div > input').type('test 1')
    // //     cy.get('[class="table hovered-rows loader  js-employee-list"]').contains('td', 'Test 2').should('be.visible')

    // // })

    // // it('Delete Employee', function () {
    // //     cy.wait(10000);
    // //     cy.get('li:nth-child(20) > a > span').click();  //View team
    // //     cy.get('div > input').type('test 2')
    // //     //cy.get('[class="table hovered-rows loader  js-employee-list"]').contains('td','Test 2').should('be.visible')
    // //     cy.get('[class="fa fa-fw fa-square-o"]').eq(1).click()
    // //     cy.get('div > button.btn.btn-danger.ember-view.mar-rgt--xs.btn-icon').click()
    // //     // cy.wait(5000)
    // //     cy.get('div#ember-bootstrap-wormhole button.btn.btn-danger.ember-view').click()
    // //     cy.get('div.media-body > p').should('be.visible')
    // //     cy.get('div.media-body > p').contains('1 employee has been deleted!')
    // //     cy.wait(5000)
    // // })

    afterEach(() => {
        cy.get('li:nth-child(38) > a > span').click();
    })


})
