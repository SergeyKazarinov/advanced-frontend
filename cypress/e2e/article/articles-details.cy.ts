import { selectByTestId } from '../../helpers/selectByTestId';

let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it('Статья успешно загрузилась', () => {
    cy.get(selectByTestId('ArticleDetails.Info')).should('exist');
  });
  it('Список рекомендаций загрузился', () => {
    cy.get(selectByTestId('ArticleRecommendationsList')).should('exist');
  });
  it('Отправка комментария', () => {
    cy.get(selectByTestId('ArticleDetails.Info'));
    cy.get(selectByTestId('AddCommentForm')).scrollIntoView();
    cy.addComment('test comment');
    cy.get(selectByTestId('CommentItem.Content')).should('have.length', 1);
  });
  it('Оставить рейтинг', () => {
    cy.get(selectByTestId('ArticleDetails.Info'));
    cy.get(selectByTestId('ArticleRating')).scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
