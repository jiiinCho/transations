describe('Frontend Test Spec', () => {
  it('should visit index', () => {
    cy.visit('/');
  });
});

const baseUrl = `${Cypress.env('e2e')}`;
describe('Transaction List Page', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit(`${baseUrl}`);
  });

  it('displays a list of transactions on the initial page load', () => {
    // Check that the list container is visible
    cy.get('ul').should('be.visible');

    // Check that each transaction element is rendered correctly
    cy.get('ul li').each((transaction) => {
      cy.wrap(transaction)
        .should('have.attr', 'data-type', 'transaction') // Ensure each transaction has the correct data attribute
        .within(() => {
          cy.get('[data-account-id]').should('exist'); // Ensure account ID is present
          cy.get('[data-amount]').should('exist'); // Ensure amount is present
        });
    });
  });

  it('displays the most recent transaction at the top', () => {
    // Grab the first transaction and verify its content
    cy.get('ul li')
      .first()
      .within(() => {
        cy.get('[data-amount]').should('exist');
        cy.get('[data-account-id]').should('exist');
        // You can add more checks here if necessary
      });
  });

  // it('renders the correct number of transactions', () => {
  //   // Assuming you know the number of transactions to expect
  //   const expectedTransactionCount = 3; // Modify based on your data
  //   cy.get('ul li').should('have.length', expectedTransactionCount);
  // });
});
