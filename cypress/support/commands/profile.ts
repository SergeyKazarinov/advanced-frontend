import { selectByTestId } from '../../helpers/selectByTestId';

export const updateProfile = (firstName: string, lastName: string) => {
  cy.get(selectByTestId('EditableProfileCardHeader.EditButton')).click();
  cy.get(selectByTestId('ProfileCard.FirstName')).clear();
  cy.get(selectByTestId('ProfileCard.FirstName')).type(firstName);
  cy.get(selectByTestId('ProfileCard.LastName')).clear();
  cy.get(selectByTestId('ProfileCard.LastName')).type(lastName);
  cy.get(selectByTestId('EditableProfileCardHeader.SaveButton')).click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'sdfse' },
    body: {
      name: 'testUser',
      lastName: 'testUser',
      age: 22,
      currency: 'RUB',
      country: 'Russia',
      city: 'Perm',
      username: 'User',
      avatar:
        // eslint-disable-next-line
        'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName: string, lastName: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
