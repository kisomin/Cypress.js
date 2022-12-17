
describe('Тестирование авторизации Staya', function () {

    it('Позитивный кейс: валидные данные', function () {
        cy.visit('https://staya.dog/');
        cy.contains('Вход').click();
        cy.get('.auth-form > form > [type="email"]').type('kim.min.von@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('minumret');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })

     it('Выход из авторизованного аккаунта', function () {
        cy.visit('https://staya.dog/');
        cy.contains('Мой профиль').click();
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click(); 
    })

    it('Негативный кейс: невалидные данные', function () {
        cy.visit('https://staya.dog/');
        cy.contains('Вход').click();
        cy.get('.auth-form > form > [type="email"]').type('kim.min.von@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('minumret2022');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
})
})