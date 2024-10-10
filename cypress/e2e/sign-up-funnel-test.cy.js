/// <reference types="cypress" />


describe.only('Scenario 2: Jump to the signup funnel', () => {

    beforeEach(() => {

        cy.visit('https://www.verivox.de/ratenkredit/');
        cy.wait(2000);
        cy.get('div.cmp-container.first-load').find('#uc-btn-accept-banner')
            .should('be.visible').click();

        cy.get(`input[name="kreditbetrag"]`).first().clear().type('25000');
        cy.get(`select[name = "kreditlaufzeit"]`).first().select('8 Jahre (96 Monate)');
        cy.get(`button[type = "submit"]`).contains('Jetzt vergleichen').click();
        cy.window().should('have.property', 'document');
        cy.url().should('include', '/ratenkredit');
    });

    it('should load the signup funnel when clicking on ALLE BANKEN VERGLEICHEN', () => {

        cy.get('button').contains('Alle Banken vergleichen').click();
        cy.url().should('match', /^https:\/\/www\.verivox\.de\/ratenkredit\/vergleich\/.*\/signup10$/);

    });

    it('should load the signup funnel when clicking on IN 7 MINUTEN ZUM ANGEBOT', () => {

        const firstOfferButton = cy.get('button').contains('In 7 min zum angebot').first();
        firstOfferButton.scrollIntoView().click();
        cy.url().should('match', /^https:\/\/www\.verivox\.de\/ratenkredit\/vergleich\/.*\/signup10$/);

    });

});