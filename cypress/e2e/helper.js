
let currentPosition = 0;  // Start at the top of the page
const totalHeight = document.body.scrollHeight;

export function scrollToBottomStepByStep() {
    if (currentPosition < totalHeight) {
        currentPosition += 100;

        // Scroll to the new position
        cy.scrollTo(0, currentPosition);

        // Wait for the specified delay
        cy.wait(1000);

        // Recursively scroll again until the bottom is reached
        scrollToBottomStepByStep();
    }
}


