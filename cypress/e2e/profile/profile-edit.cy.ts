import { selectByTestId } from '../../helpers/selectByTestId';

let profileId = '';

describe('Пользователь заходит на страницу пользователя', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('Профиль успешно загружается', () => {
    cy.get(selectByTestId('ProfileCard.FirstName')).should(
      'have.value',
      'testUser',
    );
  });
  it('Редактирует профиль', () => {
    cy.updateProfile('new', 'LastUser');
    cy.get(selectByTestId('ProfileCard.FirstName')).should('have.value', 'new');
    cy.get(selectByTestId('ProfileCard.LastName')).should(
      'have.value',
      'LastUser',
    );
  });
  // it('Редактирует профиль', () => {

  // });
});
