describe('Company questions tests', () => {
  it('Redirect to questions', () => {
    cy.visit('/')
    cy.get('button').contains('Start').click()
    cy.url().should('include', '/questions')
  })

  it('Check quantity of options', () => {
    cy.get('[name="question-button"]').should('have.length', 7)
  })

  it('Check flow', () => {
    cy.get('#arrow-up').should('be.disabled')
    cy.get('#continue').should('be.disabled')
    cy.get('[name="question-button"]').first().click()
    cy.get('#arrow-down').click()
    cy.get('#arrow-up').should('not.be.disabled')
    cy.get('#continue').should('be.disabled')
  })
})
