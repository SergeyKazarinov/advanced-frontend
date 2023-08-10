import { IArticle } from '../../../src/entities/Article';
import { selectByTestId } from '../../helpers/selectByTestId';

export const setRate = (rate: number = 5, feedback: string = 'feedback') => {
  cy.get(selectByTestId(`StarRating.${rate}`)).click();
  cy.get(selectByTestId('ArticleRating.Input')).type(feedback);
  cy.get(selectByTestId('ArticleRating.Send')).click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(rate: number, feedback: string): Chainable<IArticle>;
    }
  }
}
