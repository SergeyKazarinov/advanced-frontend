### Этапы разработки:

#### Webpack

- Подключен [_webpack_](https://webpack.js.org/). Настроен _[tsconfig.json](../tsconfig.json)_
- Декомпозиция _[webpack.config.ts](/webpack.config.ts)_
- Настроен [webpack-dev-server](https://webpack.js.org/configuration/dev-server/). Настроены переменные окружения для сборки
- Добавлены пакеты [react](https://ru.reactjs.org), [react-dom](https://ru.reactjs.org/docs/react-dom.html). Настроен webpack для [scss](https://sass-scss.ru), [css-modules](https://github.com/css-modules/css-modules).
- Добавлен [react-router-dom 6](https://reactrouter.com/en/v6.3.0/getting-started/overview). Добавлен [Code-splitting](https://reactjs.org/docs/code-splitting.html). [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy), [React.Suspense](https://reactjs.org/docs/react-api.html#reactsuspense)
- Настроены глобальные стили + dark theme, настроены абсолютные импорты через webpack

#### Routes, Styles, linting, Jest

- Настроен конфиг для router
- Добавлен webpack [SVGr](https://www.npmjs.com/package/@svgr/webpack) для svg, [file-loader](https://v4.webpack.js.org/loaders/file-loader/) для jpeg,gif,png и т.п.
- Добавлен [i18n](https://react.i18next.com/). [Define plugin](https://webpack.js.org/plugins/define-plugin/). Добавлен [LangSwitcher](../src/features/LangSwitcher/ui/LangSwitcher.tsx)
- Добавлен [react-refresh-webpack-plugin](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin) для отображения изменений в Реакт компонентах без перезагрузки страницы и [hot-module-replacement-plugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/) для стилей и т.п.
- Настроен [ESLint](https://eslint.org/). Создан [.eslintrc.js](../.eslintrc.js)
- Настроен [Stylelint](https://stylelint.io/). Создан [.stylelintrc.json](/.stylelintrc.json)
- Настроен [Jest](https://jestjs.io/ru/). Создан [jest.config.ts](/jest.config.ts)
- Добавлен страница NotFoundPage и Loader (Spinner)

#### Storybook, RTL, Bundle analyzer, Error Boundary, UI tests

- Добавлен [ErrorBoundary](../src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx), компонент ошибки PageError
- Установлен [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) для отслеживания размера бандла
- Установлен [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/).
- Установлен [Storybook](https://storybook.js.org/docs/react/get-started/introduction). Написана stories на каждую страницу и компонент
- Установлен [Loki](https://loki.js.org/getting-started.html) для скриншотного тестирования в связке со Storybook
- Настроен [Github Actions pipeline](../.github/workflows/main.yml). Автоматические тесты при push в master. Добавлены скриншотные тесты.
- Установлен [reg-cli](https://github.com/reg-viz/reg-cli) для более удобного сравнения скриншотов для тестирования

#### Database, Redux

- Добавлен [Redux Toolkit](https://redux-toolkit.js.org/).
- Установлен [json-server](https://www.npmjs.com/package/json-server) для имитации работы cервера.

#### Авторизация. Husky. Input. Работа с текстом. Lazy modal. Reducers, slices, async thunk

- Добавлен Lazy Modal и CreatePortal
- Добавлен husky pre-push. В конфиг [husky](../.husky/pre-commit) добавлена проверка линтеров, прогон тестов и сборка проекта.
- Добавлена форма авторизации. Авторизация через redux-toolkit.

#### Async reducers. Тесты. Instance API. TS strict mode. Модуль профиля

- Добавлен [Reducer Manager](../src/app/providers/StoreProvider/config/reducerManager.ts) и [DynamicModuleLoader](../src/shared/lib/ui/DynamicModuleLoader/DynamicModuleLoader.tsx), чтобы в runtime добавлять и удалять новые редьюсеры
- Создан класс [TestAsyncThunk](../src/shared/lib/tests/TestAsyncThunk/TestAsyncThunk.ts) для тестирования
- Добавлен [Instance API](../src/shared/api/api.ts) для запросов

#### Модуль профиля. Avatar. Редактирование и сохранение. Приватные роуты

- Добавлены кастомные компоненты [Input](../src/shared/ui/Input/Input.tsx), [Select](../src/shared/ui/Select/Select.tsx), [Avatar](../src/shared/ui/Avatar/Avatar.tsx).
- Дополнены Select'ы для [Country](../src/entities/Country/ui/CountrySelect/CountrySelect.tsx) и [Currency](../src/entities/Currency/ui/CurrencySelect/CurrencySelect.tsx).
- Создана Страница пользователя.

#### Статьи, комментарии. Нормализация данных. Блочная структура. Union типы. Skeleton. Protected Routes

- Добавлена страница статей, а также для каждой отдельной cтатьи
- Добавлены компоненты для наполнения статьи: Текст, Код, Изображение
- Добавлен компонент для загрузки Skeleton
- Реализовано отображение комментариев из базы данных на странице статьи
- Добавлен **articleDetailsCommentsSlice** с применением [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter) для [нормализации данных](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

#### Профили, Infinite Scroll, Intersection API, Отправка комментариев, профили пользователей.

- Добавлена возможность оставлять комментарии. Доступны сущности профилей. Редактирование только своего профиля.
- Добавлены приватные роуты, роуты защищены для не авторизованного пользователя.
- Добавлен кастомный хук [useInfiniteScroll](../src/shared/lib/hooks/useInfititeScroll/useInfiniteScroll.ts), реализованна бесконечная лента статей.
- Добавлено сохранение позиции скрола при возвращении к странице статей.
- Добавлен троттлинг - реализован кастомных хук [useTrottle](../src/shared/lib/hooks/useThrottle/useThrottle.ts)

#### Статьи, Профиль пользователя, уведомления, user Agent

- Добавлены фильтры для статей, поиск статьи, сортировка статей по разным типам
- Добавлен кастомный хук [useDebounce](../src/shared/lib/hooks/useDebounce/useDebounce.ts)
- Добавлен [addQueryParams](../src/shared/lib/url/addQueryParams/addQueryParams.ts) для заполнения url query-параметрами
- Добавлена [виртуализация для статей](https://www.npmjs.com/package/react-virtualized)
- Добавлен [Headless UI](https://headlessui.com/) для редактирования профиля пользователя
- Добавлен [rtkQuery](https://redux-toolkit.js.org/rtk-query/overview) для листа рекомендаций на странице статьи
- Добавлены роли для пользователей и админка, админка защищена ролью
- Добавлены уведомления для пользователя. Реализован Dropdown и drawer.
- Реализовано обнаружение устройства и визуализация представления в соответствии с обнаруженным типом устройства [react-device-detect](https://www.npmjs.com/package/react-device-detect)

#### Рефакторинг, конфиг, рейтинг, Eslint, тесты

- Добавлены алиасы для абсолютных импортов. Добавлен скрипт [updateImports](../scripts/updateImports.ts) для автоматической подстановки алиасов. Исправлены все импорты
- Добавлен [vite](https://vitejs.dev/) config
- Добавлена возможность оценки статьи и отправки фидбека
- Добавлено свойство **alias** в существующее правилео собственного плагина
- Добавлено два новых правила в [собсвенный Eslint плагин](https://www.npmjs.com/package/eslint-plugin-fsd-import-plugin) и произведен рефакторин в соответствии с плагином (добавлен testing public api)
- Добавлены [buildSelector](../src/shared/lib/store/buildSelector.ts) и [buildSlice](../src/shared/lib/store/buildSlice.ts) для удобной работы с actions и state-селекторами
- Добавлен [lint-staged](https://www.npmjs.com/package/lint-staged?activeTab=readme) для пре-коммит хуков
- Добавлены e2e тесты
- Добавлен [prettier](https://prettier.io/) и сортировка импортов
- Добавлен скрипт для автоматического удаления фичей
- Добавлен компоненет [ToggleFeature](../src/shared/lib/features/ToggleFeatures/ToggleFeatures.tsx) для добавления фичей

#### Редизайн проекта

- Добавлен Layouts для нового дизайна.
- Создан новый дизайн проекта. Переключить дизайн можно в настройках пользователя. По умолчанию страница отображена в старом дизайне. При редизайне проекта используется компонент [`ToggleFeatures`](../src//shared/lib/features/components/ToggleFeatures/ToggleFeatures.tsx) и функция [`toggleFeatures`](../src//shared/lib/features/lib/toggleFeatures.ts).
