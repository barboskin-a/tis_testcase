describe('Модуль Заявки', () => {
    it('Заявка на КО (поиск) модуль заявки', () =>{
        cy.visit('https://dev.profteam.su/account/main');
        cy.get('div.page-nav__role-block').contains('Выбрать роль');
    })
})