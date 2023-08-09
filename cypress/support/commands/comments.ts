import { selectByTestId } from '../../helpers/selectByTestId';
import { IArticle } from '../../../src/entities/Article';

export const addComment = (text: string) => {
  cy.get(selectByTestId('AddCommentForm.Input')).type(text);
  cy.get(selectByTestId('AddCommentForm.Button')).click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<IArticle>
    }
  }
}
