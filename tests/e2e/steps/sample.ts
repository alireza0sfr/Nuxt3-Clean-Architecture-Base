import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"

const TestIds = {
  HelloWorld: 'HelloWorld'
}

function init() {
  cy.visit("http://localhost:3000/")
}

Given("Visit Home Page", () => {
  init()
})

Then("HelloWorld div should contains HelloWorld text", () => {
  cy.get(`[data-test=${TestIds.HelloWorld}]`).should('contain', 'Hello World!')
})
