describe("First test", () => {
  it('should visit the page', () => {
    cy.visit("http://localhost:8000/");
  });
  it('should click the successButton', () => {
    cy.get('[data-cy=successBtn]').click();
  });
  it('should display a green success', () => {
    cy.get('.alert').contains('Successss!!')
  });
  it('should click the dangerButton', () => {
    cy.get('.danger').click();
  });
  it('should display a red danger', () => {
    cy.get('.alert').contains('Sample danger');
    cy.get('.alert').should('have.css', 'backgroundColor', 'rgb(255, 0, 0)')
  });
});
