import { selectByTestId } from '../../helpers/selectByTestId';

describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles');
    });
  });
  it('Успешная загрузка страница', () => {
    cy.get(selectByTestId('ArticleList')).should('exist');
    cy.get(selectByTestId('ArticleListItem')).should('have.length.greaterThan', 3);
  });
});
