/* global cy describe it  */

describe('Alimentatec', () => {
    it('Frontpage can be opened and contain Vite', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Vite')
    });

    it('Frontpage can be opened and contain React ', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('React')
    });
});