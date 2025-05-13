describe('Модуль Авторизация', () =>{
    it('Авторизация', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[autocomplete="username"]').type('gr_shiero');
        cy.get('input[type="password"]').first().type('Password1');
        cy.get('button').contains('Войти').and('not.have.css', 'display', 'none')
            .click({force: true});
    });
})