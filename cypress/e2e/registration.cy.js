describe('Модуль Регистрация',() => {
    it('Модуль Регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('shieroel');
        cy.get('input[type="email"]').type('liza.shirokikh05@mail.ru');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Password1');
        cy.get('div.registration-form__button').contains('Далее').should('be.visible')
            .and('not.have.css', 'display', 'none').click();

        cy.get('input[autocomplete="family-name"]').type('Широких');
        cy.get('input[autocomplete="given-name"]').type('Елизавета');
        cy.get('input[autocomplete="additional-name"]').should('exist').and('not.have.attr', 'required');
        cy.get('input[autocomplete="additional-name"]').type('Романовна');
        // cy.get('input[type="file"]').should('exist').and('not.have.attr', 'required');
        cy.get('input[type="file"]').selectFile('tis_testcase/cypress/fixtures/avatar.jpg', { force: true });
        cy.get('div.registration-form__button').contains('Создать аккаунт').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
        cy.visit('https://dev.profteam.su/account/main');

    });
    it('Некорректная почта (негативный) Модуль регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('login')
        cy.get('input[type="email"]').type('email-for-negative-test');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Password1');
        cy.get('div.registration-form__button').contains('Далее').click({force: true});
    });

    it('Некорректный логин (негативный) Модуль регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('testerStudent1');
        cy.get('input[type="email"]').type('email2025@mail.ru');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Password1');
        cy.get('div.registration-form__button').contains('Далее').click({force: true});
    });

    it('Несовпадение паролей (негативный) Модуль регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('login');
        cy.get('input[type="email"]').type('email2025@mail.ru');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('dge53');
        cy.get('div.registration-form__button').contains('Далее').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
    });

    it('Слишком простой пароль (негативный) Модуль регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('login');
        cy.get('input[type="email"]').type('email2025@mail.ru');
        cy.get('input[type="password"]').first().type('123');
        cy.get('input[type="password"]').eq(1).type('123');
        cy.get('div.registration-form__button').contains('Далее').click({force: true})
        cy.contains('Персональные данные').should('not.exist');
    });

    it('Латиница в полях ввода персональных данных (негативный) Модуль регистрация', () => {
        cy.visit('https://dev.profteam.su/registration')
        cy.get('input[autocomplete="username"]').type('login');
        cy.get('input[type="email"]').type('email2025@mail.ru');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('input[type="password"]').eq(1).type('Password1');
        cy.get('div.registration-form__button').contains('Далее').should('be.visible')
            .and('not.have.css', 'display', 'none').click();

        cy.get('input[autocomplete="family-name"]').type('Shirokikh');
        cy.get('input[autocomplete="given-name"]').type('Elizaveta');
        cy.get('input[autocomplete="additional-name"]').should('exist').and('not.have.attr', 'required');
        cy.get('input[autocomplete="additional-name"]').type('Romanovna');
        cy.get('input[type="file"]').should('exist').and('not.have.attr', 'required');
        cy.get('input[type="file"]').selectFile('tis_testcase/cypress/fixtures/avatar.jpg', { force: true });
        cy.get('div.registration-form__button').contains('Создать аккаунт').click({force: true});
    });
})