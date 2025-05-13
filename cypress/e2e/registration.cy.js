describe('Модуль Регистрация',() => {
    it('Модуль Регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('gr_shiero');
        cy.get('input[type="email"]').type('liza.shirokikh05@mail.ru');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Password1');
        // исправить
        // cy.get('button[type="submit"]').eq(2).and('not.have.css', 'display', 'none').click({force: true});
        cy.get('button').contains('Далее')
        cy.get('input[autocomplete="family-name"]').type('Широких');
        cy.get('input[autocomplete="given-name"]').type('Елизавета');
        cy.get('input[autocomplete="additional-name"]').should('exist')
            .and('have.attr', 'required', false).type('Романовна');
    });
});