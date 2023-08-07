import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('Пользователь Не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Переход на главную страницу', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Переход на несуществующую страницу', () => {
      cy.visit('/sdgsg');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('Пользователь открывает страницу профиля', () => {
    beforeEach(() => {
      cy.login('testUser', '1234');
    });

    it('Переход на главную страницу', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Переход на главную страницу', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
