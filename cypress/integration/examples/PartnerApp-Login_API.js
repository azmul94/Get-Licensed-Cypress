/// <reference types="Cypress" />

import { url, email, password } from '../../fixtures/Login'

describe("REST API test with Cypress ", () => {
    
    it('API test  -  User Login and Profile', () => {
        cy.request({
            // POST call for login
            method: 'POST',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: {
                "email": email,
                "password" : password
            }
        }).then((res) => {
            expect(res.status).eq(200)
            expect(res.body).has.property('message', 'Trainee token generated successfully.')
            expect(res.body.data.user_info).has.property('token_type', 'bearer')
        })
    })
})