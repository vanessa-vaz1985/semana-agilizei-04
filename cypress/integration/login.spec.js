/// <reference types="cypress" />

beforeEach(() => {
    cy.intercept({
        method: 'GET',
        hostname: 'res.cloudinary.com'
    }, {
        statusCode: 200,
        fixture: 'imagem-logo'
    }).as('cloudinary');

})

describe('Twitter Clone - Login', () => {
    it('Ao autenticar com credenciais válidas, deve ser direcionado para o feed', () => {

        cy.login();

        cy.visit('/');

        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length', 6);
        
    });
    
});




// agilizei@email.com
// Querty123