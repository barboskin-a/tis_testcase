describe('Модуль Личный кабинет', () => {
    it('Просмотр уведомлений Модуль личный кабинет', () =>{
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[autocomplete="username"]').type('shieroel');
        cy.get('input[type="password"]').type('Password1');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();

        cy.visit('https://dev.profteam.su/account/main');
        cy.get('div.notification-bell').click();
    })
})