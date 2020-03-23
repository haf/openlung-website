/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigate ventilation process', () => {
    cy.get('[data-cy=ventilate-now]').click()
    cy.url().should('satisfy', r => r.endsWith('/ventilate-now'))

    cy.get('[data-cy=experienced]').click()
    cy.url().should('satisfy', r => r.endsWith('/ventilate-now/experienced'))
    cy.get('[data-cy=back]').click()

    cy.get('[data-cy=need-guidance]').click()
    cy.url().should('satisfy', r => r.endsWith('/ventilate-now/need-guidance'))
    cy.get('[data-cy=back]').click()

    cy.get('[data-cy=back]').click()
  })

  it('navigate request help process', () => {
    cy.get('[data-cy=i-need-help]').click()
    cy.url().should('include', '/i-need-help')
    cy.get('[data-cy=back]').click()
  })

  it('navigate offer help process', () => {
    cy.get('[data-cy=i-can-help]').click()
    cy.url().should('include', '/i-can-help')
    cy.get('[data-cy=back]').click()
  })

  it('navigate resources', () => {
    cy.get('[data-cy=resources]').click()
    cy.url().should('include', '/COVID-19-resources')
    cy.get('[data-cy=back]').click()
  })

  it('navigate building a ventilator tutorial', () => {
    cy.get('[data-cy=make-a-ventilator]').click()
    cy.url().should('include', '/make-a-ventilator')
    cy.get('[data-cy=back]').click()
  })
})
