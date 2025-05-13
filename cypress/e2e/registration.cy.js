describe('Модуль Регистрация',() => {
    it('Модуль Регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('shiero');
        cy.get('input[type="email"]').type('liza.shirokikh05@mail.ru');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Password1');
        cy.get('div.registration-form__button').contains('Далее').should('be.visible')
            .and('not.have.css', 'display', 'none').click()
        cy.get('input[autocomplete="family-name"]').type('Широких');
        cy.get('input[autocomplete="given-name"]').type('Елизавета');
        cy.get('input[autocomplete="additional-name"]').should('exist').and('not.have.attr', 'required');
        cy.get('input[autocomplete="additional-name"]').type('Романовна');
        cy.get('input[type="file"]').should('exist').and('not.have.attr', 'required');
        cy.get('input[type="file"]').selectFile('cypress/fixtures/avatar.jpg', { force: true });

    });
    it('Некорректная почта (негативный) Модуль регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('login')
        cy.get('input[type="email"]').type('email-for-negative-test')
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Password1');
        cy.get('div.registration-form__button').contains('Далее').click({force: true})
    });

    it('Существующий логин (негативный) Модуль регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('testerStudent');
        cy.get('input[type="email"]').type('liza.shirokikh05@mail.ru');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Password1');
        cy.get('div.registration-form__button').contains('Далее').click({force: true})
    });

    it('Несовпадение паролей (негативный) Модуль регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('login');
        cy.get('input[type="email"]').type('liza.shirokikh05@mail.ru');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Pasword2');
        cy.get('div.registration-form__button').contains('Далее').click({force: true})
    });

})