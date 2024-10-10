/// <reference types="cypress" />

import { scrollToBottomStepByStep } from './helper.js';

// before hook to perform before each test
describe('Scenario 1: Verify the Banking showcase result list', () => {
  beforeEach(() => {

    cy.visit('https://www.verivox.de');
    cy.wait(2000);
    cy.get('div.cmp-container.first-load')
      .find('#uc-btn-accept-banner')
      .should('be.visible')
      .click();
  });

  it('Verify the Banking showcase result list', () => {
    // Navigate to the Kredit page
    cy.get('.page-navigation-item.icn-euro-outlined')
      .contains('Kredit')
      .click();
    cy.window().should('have.property', 'document');

    // Set the loan amount and loan term
    cy.get('input[name="kreditbetrag"]').first().clear().type('25000');
    cy.get('select[name="kreditlaufzeit"]').first().select('8 Jahre (96 Monate)');
    cy.get('button[type="submit"]').first().click();
    cy.window().should('have.property', 'document');

    // Scroll down to load more elements if needed
    scrollToBottomStepByStep();
    cy.window().should('have.property', 'document');

    // Wait for the product tiles to be visible
    cy.get('.product-list vx-srl-base-product-card', { timeout: 10000 })
      .should('be.visible');

    // Get the number of product tiles and assert there is at least 10 tiles
    cy.get('.product-list vx-srl-base-product-card')
      .should('have.length.at.least', 10);

  });
});

