/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>

import { name, email, mobile, sandbox_email, s_password } from '../../fixtures/Order_flow.json'

describe('browser action', () => {
    it('Should load correct URL', () => {
        cy.visit('/')
        cy.url().should('include', 'uat.get-licensed.co.uk')
    });

    it('click on door supervisor course', () => {
        cy.get('.btn-warning-dark')
        .contains('Door Supervisor').should('have.text', ' Door Supervisor ')
        .click()
    });

    it('click on book now button', () => {
        cy.get(':nth-child(6) > .btn-secondary')
        .contains('Book Now').should('have.text', 'Book Now')
        .click()
    });

    it('Select the Aylesbury location course', () => {
        cy.wait(6000)
        .get(':nth-child(3) > :nth-child(1) > .col-lg-4 > .courseCardRight > .cardButton > .btn')
        .contains('Book Now').should('have.text', ' Book Now')
        .click()
    });

    it('Select package from booking step 1', () => {
        cy.get('.card.goldPackage > .card-body > .btn')
        .contains('Select').should('have.text', 'Select')
        .click()
    });
    
    it('Select EFAW in the package', () => {
        cy.get('#addEfaw')
        .click({force: true})
    });

    it('Inserting the user information - Name', () => {
        cy.get('#floatingFullName').clear().type(name)
    });

    it('Inserting the user Email', () => {
        cy.get('#floatingEmailAddress').clear().type(email)
    });

    it('Inserttign the user Mobile number', () => {
        cy.get('#floatingMobileNumber').clear().type(mobile)
    });

    it('Click on Next Step 1', () => {
        cy.get('#step1').contains('Next').should('have.text', 'Next').click()
    });

    it('Insert Post Code', () => {
        cy.get('#postal_code').type('Leeds')
        .wait(300)
        .get('.custom-dropdown > .list-unstyled > :nth-child(1)')
        .click('center', {force: true})
    });

    it('Click on Next Step 2', () => {
        cy.get('#step2').contains('Next').should('have.text', 'Next').click()
    });

    it('Skip the products', () => {
        cy.get('.d-flex.mt-4 > :nth-child(1) > span').click()
    });

    it('Payment information', () => {
        cy.get('.radiobuttons > .mb-3 > :nth-child(1)').click('center', {force: true}).click()
        cy.get('.col-md-10 > .card-number-element').click('center', {force: true}).click()
        cy.get('.col-md-10 > .card-number-element > .StripeElement > .__PrivateStripeElement > iframe').click()
        cy.get('.col-md-10 > .card-number-element > .StripeElement > .__PrivateStripeElement > iframe').within(() => {
              cy.fillElementsInput('cardNumber', '4242424242424242');
              cy.fillElementsInput('cardExpiry', '1025'); // MMYY
              cy.fillElementsInput('cardCvc', '123');
            });

        // cy.fillOutCreditCardForm({ number: 4242424242424242, expiration: '02/25', cvc: 100, name_On_Card: "Azmul"})
        // .then(function ($iframe) {
        //     const $body = $iframe.contents().find('body')
        //     cy.wrap($body)
        //     .find('input:eq(0)')
        //     .type('4242424242424242')
    
        //     cy.wrap($body)
        //     .find('input:eq(1)')
        //     .type('1222')
            
        //     cy.wrap($body)
        //     .find('input:eq(2)')
        //     .type('123')
        // })
        // cy.getIframe('.col-md-10 > .card-number-element > .StripeElement > .__PrivateStripeElement > iframe').its('0.contentDocument.body').then(cy.wrap).find('card-number-element')
        // .should('be.visible').click('left', {force: true}).type('4000 0000 0000 3063')
        // cy.get(':nth-child(2) > :nth-child(1) > .card-number-element > .StripeElement > .__PrivateStripeElement > iframe')
        // .click('left', {force: true}).type('0228')
        // cy.get(':nth-child(2) > .card-number-element > .StripeElement > .__PrivateStripeElement > iframe')
        // .click('left', {force: true}).type('582')
        // cy.get('#floatingFullName').click().type('Azmul"s Script')
        cy.get('#agreed_terms_policies').click()
        // cy.origin("https://www.sandbox.paypal.com", () =>{

        // });
    });
})