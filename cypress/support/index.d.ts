declare namespace Cypress {
    interface Chainable {
  
      /**
       * @example cy.login()
       */
      login(): void
  
      /**
       * @example cy.token()
       */
  
      token(): void

      /**
       * @example cy.tweet('texto de teste do tweet')
      */
  
      tweet(): Text

  
    }
  }