/// <reference types="Cypress" />

describe("My second test", () => {
  it("Visits page 2", () => {
    cy.visit("page-2")
    cy.get("main > h1").should("contain", "Hi from the second page")
  })
})
