
describe('Bayzat Task', () => {

    before(function () {

        cy.fixture('example').then(function (data) {
            this.data = data

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
        cy.wait(5000)
        cy.url().should('eq', 'https://www.bayzat.com/enterprise/dashboard/index');
    })

    


     it('Add Employee', function () {
        for (i = 1; i <= 2; i++) {
            cy.get('li:nth-child(21) > a > span').click() //add employee
            cy.get('[class="btn btn-primary btn-lg btn-labeled fa fa-user-plus mar-ver ember-view"]').click()
            cy.get('input[name="preferredName"]').type(this.data.PreferredName)
            cy.get('input[name="firstName"]').type(this.data.firstname)
            cy.get('input[name="lastName"]').type(this.data.LastName)

            cy.get('input[name="dateOfBirthFormatted"]').type(this.data.DateofBirth)
            cy.get('input[name="preferredName"]').click()
            cy.get('input[name="mobileNumber"]').type(this.data.mobileNumber)
            cy.get('input[name="position"]').type(this.data.position)
            cy.get('label > span > i').click()
            cy.get('div.col-sm-11.col-md-10.col-lg-8.mar-ver > div > div > button:nth-child(2)').click()
            cy.get('div.media-body > p').should('be.visible')      //verify submission message
        }
    })


    it('View Team', function () {
        cy.get('li:nth-child(20) > a > span').click() //View team
        cy.get('[class="fa fa-fw fa-square-o"]').eq(1).click()
        cy.get('[class="table hovered-rows loader  js-employee-list"]').should('be.visible')

    })


    it('Select Employee', function () {
        cy.get('li:nth-child(20) > a > span').click();  //View team
        cy.get('[class="table hovered-rows loader  js-employee-list"]').contains('td', 'Employee Test 1').should('be.visible').click()
        cy.get('[class="js-formatted-person-name ember-view"]').contains('Employee Test 1').should('be.visible')
    })


    it('Search Employee', function () {
        cy.get('li:nth-child(20) > a > span').click();  //View team
        cy.get('div > input').type('Employee Test 1')
        cy.get('[class="table hovered-rows loader  js-employee-list"]').contains('td', 'Employee Test 1').should('be.visible')

    })

    it('Delete Employee', function () {
        cy.get('li:nth-child(20) > a > span').click();  //View team
        //cy.get('div > input').type('Employee Test 1')
        //cy.get('[class="table hovered-rows loader  js-employee-list"]').contains('td', 'Employee Test 1').should('be.visible')
        cy.get('[class="fa fa-fw fa-square-o"]').eq(2).click()
        cy.get('[class="fa fa-fw fa-square-o"]').eq(1).click()
        cy.get('div > button.btn.btn-danger.ember-view.mar-rgt--xs.btn-icon').click({force: true})
        cy.get('[class="btn btn-danger ember-view"]').click({force: true})
        //cy.get('div#ember-bootstrap-wormhole button.btn.btn-danger.ember-view').click({force: true})
        cy.get('div.media-body > p').should('be.visible')
        cy.get('div.media-body > p').contains('2 employees have been deleted!')
        
    })

    afterEach(() => {
        cy.get('li:nth-child(38) > a > span').click();
    })

})

