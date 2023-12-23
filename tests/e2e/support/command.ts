Cypress.Commands.add("getThe", testSelector =>
  cy.get(`[data-test=${testSelector}]`)
)

Cypress.Commands.add("notExistsThe", testSelector =>
  cy.get(`[data-test=${testSelector}]`).should('not.exist')
)

Cypress.Commands.add("existsThe", testSelector =>
  cy.get(`[data-test=${testSelector}]`).should('exist')
)

Cypress.Commands.add("clickThe", testSelector => {
  cy.get(`[data-test=${testSelector}]`).click()
})

Cypress.Commands.add("fillThe", (testSelector, value) => {
  cy.get(`[data-test=${testSelector}]`).type(value)
})