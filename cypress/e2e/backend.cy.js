const apiUrl = `${Cypress.env('apiUrl')}`;

describe('Backend Test Spec', () => {
  it('should call ping', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/ping`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

describe('Transaction API', () => {
  it('creates a new transaction', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/transactions`,
      body: {
        account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
        amount: 1000,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      // Check if response status is 201
      expect(response.status).to.eq(201);

      // Check the response body structure
      expect(response.body).to.have.property('transaction_id');
      expect(response.body).to.have.property(
        'account_id',
        '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2'
      );
      expect(response.body).to.have.property('amount', 1000);
    });
  });

  it('fetches all transactions', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/transactions`,
    }).then((response) => {
      // Check if response status is 200
      expect(response.status).to.eq(200);

      // Check if the response body is an array
      expect(response.body).to.be.an('array');
    });
  });

  it('returns error when mandatory parameters are missing', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/transactions`,
      body: {
        // Missing account_id and amount
      },
      failOnStatusCode: false,
    }).then((response) => {
      // Check if response status is 400
      expect(response.status).to.eq(400);
    });
  });
});
