import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { componentRender } from '@shared/lib/tests/componentRender';
import { IProfile } from '@entities/Profile';
import { CurrencyEnum } from '@entities/Currency';
import { CountryEnum } from '@entities/Country';
import userEvent from '@testing-library/user-event';
import { $api } from '@shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import EditableProfileCard from './EditableProfileCard';

const profile: IProfile = {
  id: '1',
  name: 'admin',
  lastName: 'admin',
  age: 30,
  city: 'Perm',
  username: 'username',
  currency: CurrencyEnum.RUB,
  country: CountryEnum.Russia,
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  test('The readonly mode should toggle and a cancel button will appear', async () => {
    componentRender(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('When you click on the Cancel button, the values ​​​​should be reset to zero', async () => {
    componentRender(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
  });

  test('An error should appear when entering invalid values', async () => {
    componentRender(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('If there are no errors, the data should be updated', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
