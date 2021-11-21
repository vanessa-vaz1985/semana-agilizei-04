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

describe.only('Twitter Clone - Tweet', () => {
    it('Ao informar um texto válido e confirmar o tweet, deve ser exibida uma confirmação', () => {

        cy.login();

        cy.visit('/');

        cy.tweet('agilizar a carreira, focando em automação de testes')
    
        cy.get('.Toastify__toast')
            .should('be.visible')
            .and('contain', 'Your tweet has been posted');
    });
    
});
