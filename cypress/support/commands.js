// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const Form_URL = '/#sign-in'


Cypress.Commands.add('login', (email, password) => {
    cy.visit(Form_URL)

    cy.get('input[name="email"]')
    cy.get('[type="text"]').clear() 
    .type(email)
    .should('have.value', email)      
    cy.get('input[name="password"]')
     cy.get('[type="password"]').clear() 
        .type(password)
        .should('have.value', password)
    
    cy.get('button[type="submit"]').click()
    cy.wait(2000);

    cy.title().should('contain', 'Zuju Kickoff | Watch Football Matches and Play Live Match Quiz')




})