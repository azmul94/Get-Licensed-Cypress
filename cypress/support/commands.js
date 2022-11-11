// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// For handling iFrames

import 'cypress-iframe'


// Cypress.Commands.add('fillOutCreditCardForm', details => {
//     console.log('details')
//     cy.get('.__PrivateStripeElement > iframe')
//       .iframe()
//       .then(iframes => {
//         cy.wrap(iframes[0])
//           .find('.InputElement')
//           .first()
//           .fill(
//             4222222222222
//           );
//         cy.wrap(iframes[1])
//           .find('.InputElement')
//           .first()
//           .fill(
//             '02/25'
//           );
//         cy.wrap(iframes[2])
//           .find('.InputElement')
//           .first()
//           .fill(333);
//         cy.wrap(iframes[3])
//           .find('.InputElement')
//           .first()
//           .fill("Azmul");
//       });
//   });

// cy.frameLoaded('.__PrivateStripeElement')
// cy.iframe('.__PrivateStripeElement')
//   .find('.InputElement')
//   .should('be.visible')
//   .click()