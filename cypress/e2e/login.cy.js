describe('Модуль Авторизация', () =>{
    it('Модуль Авторизация', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[autocomplete="username"]').type('shieroel');
        cy.get('input[type="password"]').type('Password1');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
        cy.visit('https://dev.profteam.su/account/main');
    });

    it('Неверный логин или пароль (негативный) модуль авторизация', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[autocomplete="username"]').type('shieroel');
        cy.get('input[type="password"]').type('fddssR214');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
    });
})