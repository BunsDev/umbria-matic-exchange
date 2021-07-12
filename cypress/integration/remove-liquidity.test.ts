describe('Remove Liquidity', () => {
  it('redirects', () => {
    cy.visit('/remove/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.url().should(
      'contain',
      '/remove/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85'
    )
  })

  it('eth remove', () => {
    cy.visit('/remove/ETH/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'ETH')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MKR')
  })

  it('eth remove swap order', () => {
    cy.visit('/remove/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85/ETH')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MKR')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'ETH')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'WETH')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MKR')
  })

  it('does not crash if ETH is duplicated', () => {
    cy.visit('/remove/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270-0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'WETH')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'WETH')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xb290b2f9f8f108d03ff2af3ac5c8de6de31cdf6d-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SKL')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MKR')
  })
})
