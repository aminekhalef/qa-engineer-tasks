/// <reference types="cypress" />

describe('Address Check Service API Tests', () => {

    const baseUrl = 'https://service.verivox.de/geo/latest/cities'

    it('should return one city for postal code 10409', () => {

        cy.request(`${baseUrl}/10409`)
            .its('body')
            .should('be.an', 'array') // check that the response is an array
            .and('have.length', 1) // Check that the array contains only one element
            .then((city) => {
                expect(city[0].Name).to.equal('Berlin')
            });
    });

    // Test for postcode 77716
    it('should return three cities for postal code 77716', () => {
        cy.request(`${baseUrl}/77716`)
            .its('body')
            .should('be.an', 'array')
            .and('have.length', 3) // Check that there are at least three cities 
            .then((cities) => {
                const cityNames = cities.map(city => city.Name);
                // Verify that the expected cities are in the response
                expect(cityNames).to.be.members(['Fischerbach', 'Haslach', 'Hofstetten']);
            });
    });

})