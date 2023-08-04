import { componentRender } from '@shared/lib/tests/componentRender';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@shared/const/router';
import { screen } from '@testing-library/dom';
import { UserRoleEnum } from '@entities/User';
import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {
  test('Page should be render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/asdfafs',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Redirect to main page unauthorized user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Access to a closed page for an authorized user ', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          authData: {},
          isLoadPage: false,
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  // test('Access denied, missing role', async () => {
  //   componentRender(<AppRouter />, {
  //     route: getRouteAdmin(),
  //     initialState: {
  //       user: {
  //         authData: {
  //           roles: [UserRoleEnum.USER],
  //         },
  //         isLoadPage: false,
  //       },
  //     },
  //   });

  //   const page = await screen.findByTestId('ForbiddenPage');
  //   expect(page).toBeInTheDocument();
  // });

  test('Access to admin page for the admin user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {
            roles: [UserRoleEnum.ADMIN],
          },
          isLoadPage: false,
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
