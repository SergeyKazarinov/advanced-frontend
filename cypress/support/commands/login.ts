import { IUser } from '../../../src/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage';

export const login = (
  username: string = 'testUser',
  password: string = '1234',
) =>
  cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/login',
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
      return body;
    });

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<IUser>;
    }
  }
}
