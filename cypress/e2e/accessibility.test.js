/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Visits the front page", () => {
    cy.visit("/")
    cy.get("h1 > a").should("contain", "Job Opportunity Tracker")
  })
})
