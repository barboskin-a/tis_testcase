describe('Модуль Заявки', () => {
    it('Роль КО (создание) модуль заявки', () =>{
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[autocomplete="username"]').type('shieroel');
        cy.get('input[type="password"]').type('Password1');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
        cy.url().should('include', '/account/main');
        cy.get('button[type=submit]').eq(3).click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.contains('.menu-item.select-role-form__item-choice', 'Я являюсь представителем коммерческой организации').should('be.visible')
            .click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.contains('.menu-item.variants-company__item-choice', 'Создание нового личного кабинета работодателя').should('be.visible')
            .click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.get('input[placeholder="Название вашей организации"]').type('МяуМяуХаус');
        cy.get('input[placeholder="Адрес вашей организации"]').type('г.Томск, ул.Ленина, д.23');
        cy.get('textarea[placeholder="Описание вашей организации"]').type('МяуМяуМяуМяуМяуМяуМяуМяуМяуМяу');
        cy.get('div.create-company-form__description-block').contains('Добавить').should('be.visible')
            .and('not.have.css', 'display', 'none').click();

    })

    it('Некорректный ввод данных(недопустимые символы) (негативный) роль КО', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[autocomplete="username"]').type('shieroel');
        cy.get('input[type="password"]').type('Password1');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
        cy.url().should('include', '/account/main');
        cy.get('button[type=submit]').eq(3).click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.contains('.menu-item.select-role-form__item-choice', 'Я являюсь представителем коммерческой организации').should('be.visible')
            .click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.contains('.menu-item.variants-company__item-choice', 'Создание нового личного кабинета работодателя').should('be.visible')
            .click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.get('input[placeholder="Название вашей организации"]').type('МяуМяуХаус=%#№');
        cy.get('input[placeholder="Адрес вашей организации"]').type('г.Томск, ул.Ленина, д.23=%#№');
        cy.get('textarea[placeholder="Описание вашей организации"]').type('МяуМяуМяуМяуМяуМяуМяуМяуМяуМяу=%#№');
        cy.get('div.create-company-form__description-block').contains('Добавить').click({force: true})
    })

    it('Роль ОУ (создание) модуль заявки', () =>{
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[autocomplete="username"]').type('shieroel');
        cy.get('input[type="password"]').type('Password1');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
        cy.url().should('include', '/account/main');
        cy.get('button[type=submit]').eq(3).click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.contains('.menu-item.select-role-form__item-choice', 'Я являюсь представителем образовательной организации')
            .should('be.visible').click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.contains('.menu-item.variants-company__item-choice', 'Создание нового личного кабинета ОУ').should('be.visible')
            .click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.get('input[placeholder="Название вашей организации"]').type('МяуМяуОУ');
        cy.get('input[placeholder="Адрес вашей организации"]').type('г.Томск, ул.Ленина, д.23');
        cy.get('textarea[placeholder="Описание вашей организации"]').type('МяуМяуМяуМяуМяуМяуМяуМяуМяуМяу');
        cy.get('div.create-company-form__description-block').contains('Добавить').should('be.visible')
            .and('not.have.css', 'display', 'none').click();

    })

    it('Некорректный ввод данных(недопустимые символы) (негативный) роль ОУ', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[autocomplete="username"]').type('shieroel');
        cy.get('input[type="password"]').type('Password1');
        cy.get('div.login-form__button').contains('Войти').should('be.visible')
            .and('not.have.css', 'display', 'none').click();
        cy.url().should('include', '/account/main');
        cy.get('button[type=submit]').eq(3).click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.contains('.menu-item.select-role-form__item-choice', 'Я являюсь представителем образовательной организации').should('be.visible')
            .click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.contains('.menu-item.variants-company__item-choice', 'Создание нового личного кабинета ОУ').should('be.visible')
            .click()
        cy.get('div.desktop-modal').should('be.visible');

        cy.get('input[placeholder="Название вашей организации"]').type('МяуМяуОУ=%#№');
        cy.get('input[placeholder="Адрес вашей организации"]').type('г.Томск, ул.Ленина, д.23=%#№');
        cy.get('textarea[placeholder="Описание вашей организации"]').type('МяуМяуМяуМяуМяуМяуМяуМяуМяуМяу=%#№');
        cy.get('div.create-company-form__description-block').contains('Добавить').click({force: true})
    })
})