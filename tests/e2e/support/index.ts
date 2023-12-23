import '../support/command'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to click DOM elemnt using data-test.
       * @example cy.clickThe('addBtn')
       */
      clickThe(selector: string): Chainable<JQuery<HTMLElement>>
      /**
       * Check existance of a DOM element.
       * @example cy.existsThe('customerCard-0')
       */
      existsThe(selector: string): Chainable<JQuery<HTMLElement>>
      /**
       * Find input by selector and then type given data.
       * @example cy.fillThe('fistName', 'john')
       */
      fillThe(selector: string, value: string): Chainable<JQuery<HTMLElement>>
      /**
       * Get DOM element by given selector.
       * @example cy.getThe('formErrors')
       */
      getThe(selector: string): Chainable<JQuery<HTMLElement>>
      /**
       * Check not existance of a DOM element.
       * @example cy.notExistsThe('formErrors')
       */
      notExistsThe(selector: string): Chainable<JQuery<HTMLElement>>
    }
  }
}