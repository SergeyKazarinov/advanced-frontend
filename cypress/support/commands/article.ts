import { IArticle } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Статья для тестирвоания',
  subtitle: 'Статья для тестирования',
  // eslint-disable-next-line
  img: 'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: ['SCIENCE'],
  blocks: [],
};

export const createArticle = (article?: IArticle) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'sdfse' },
    body: article ?? defaultArticle,
  }).then((res) => res.body);
};

export const removeArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'sdfse' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: IArticle): Chainable<IArticle>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
