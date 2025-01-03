# Advanced Frontend

<img src='./src/shared/assets/advanced-frontend.jpg' width="100%">

## Содержание

- [Быстрый старт](#start)
- [Скрипты](#scripts)
- [Архитектура проекта](#fsd)
- [Работа с переводами](#translate)
- [Тесты](#tests)
- [Линтинг и собственный eslint-плагин](#linting)
- [Storybook](#storybook)
- [Конфигурация проекта](#config)
- [CI pipeline и pre commit хуки](#ci)
- [Работа с данными](#server)
- [Работа с feature-flags](#feature-flags)
- [Сущности (entities)](#entities)
- [Этапы разработки](#development)
- [Что планируется сделать](#next)

## <a id="start" ></a>Быстрый старт

1. Склонировать проект на свой компьютер

```bash
git clone https://github.com/SergeyKazarinov/advanced-frontend.git
```

2. установить зависимости

```bash
npm install
```

3. Запустить проект (запуск сервера + frontend проекта в dev режиме)

```bash
npm run start:dev
```

## <a id="scripts" ></a>Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на Vite dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на Vite dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build` - Webpack cборка в prod режиме
- `npm run build:dev` - Webpack cборка в dev режиме (не минимизирован)
- `npm run build:vite` - Vite cборка в prod
- `npm run prettier` - Запустить форматирование кода
- `npm run lint` - Проверка ts файлов линтером
- `npm run lint:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:e2e` - Запуск e2e тестов
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run build-storybook` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run remove-feature` - запускает скрипт автоматического удаления фичей

## <a id="fsd" ></a>Архитектура проекта

Проект написан в соответствии с методологией [Feature-Sliced Design](https://feature-sliced.design/)

- Shared — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.
- Entities (сущности) — бизнес-сущности (например, User, Product или Order).
- Features (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.
- Widgets (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки.
- Pages (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
- App — настройки, стили и провайдеры для всего приложения.

## <a id="translate" ></a>Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Документация [i18next](https://react.i18next.com/)

## <a id="tests" ></a>Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
3. Скриншотное тестирование с loki `npm run test:ui`
4. e2e тесты `npm run test:e2e`

## <a id="linting" ></a>Линтинг

В проекте используется [ESlint](https://eslint.org/) для проверки TypeScript кода и Stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin [eslint-plugin-kss-fsd-imports](https://www.npmjs.com/package/eslint-plugin-kss-fsd-imports),
который имеет следующие правила:

1. `Path Checker` - запрещает использовать абсолютные импорты в рамках одного модуля.
2. `Layer Imports` - запрещает использование импонтов более высоких слоев в нижних слоях.
3. `Public Api Imports` - Это правило позволяет использовать импорт из других модулей только из публичного API (index.ts).

Более подробно о правила и использовании можете ознакомиться на [сайте](https://www.npmjs.com/package/eslint-plugin-kss-fsd-imports) плагина.

#### Запуск линтеров

- `npm run lint` - Проверка ts файлов линтером
- `npm run lint:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

## <a id="storybook" ></a>Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью [storybook-addon-mock](https://storybook-addon-mock.netlify.app/?path=/docs/docs-introduction--docs).

Файл со сторикейсами находится рядом с компонентом с расширением .stories.tsx

#### Запуск сторибук

- `npm run storybook`

Документация [Storybook](https://storybook.js.org/)

Подбробно про использование storybook в проекте можете ознакомиться [здесь](./docs/storybook.md)

## <a id="config" ></a>Конфигурация проекта

Для разработки проект содержит [Webpack-конфиг](/config/build/buildWebpackConfig.ts) - ./config/build  
Вся конфигурация хранится в /config

- [/config/babel](/config/babel/babelRemovePropsPlugin.ts) - babel
- [/config/build](/config/build/) - конфигурация webpack
- [/config/jest](/config/jest/) - конфигурация тестовой среды
- [/config/storybook](/config/storybook/) - конфигурация сторибука

Также в проекте используется второй сборщик - Vite, конфигурация которого находится в вайле [vite.config.ts](./vite.config.ts)

## <a id="ci" ></a>CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В CI прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

## <a id="server" ></a>Работа с данными

Взаимодействие с данными осуществляется с помощью Redux Toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/ui/DynamicModuleLoader/DynamicModuleLoader.tsx)

## <a id="feature-flags" ></a>Работа с feature-flags

Разрешено использоваение feature flags только с помощью хелпера [`toggleFeatures`](/src//shared/lib/features/lib//toggleFeatures.ts).  
В него передается объект с опциями:

```javascript
{
  name: название feature-флага
  on: функция, которая отработает после включения фичи
  off: функция, которая отработает после выключения фичи
}
```

---

Для работы с компонентами используется компонент [`ToggleFeatures`](/src//shared/lib/features/components/ToggleFeatures/ToggleFeatures.tsx).

В него передаются следующие пропсы:

```typeScript
{
  <ToggleFeatures
    features='название feature-флага'
    on={} //компонент, которые будет отображаться после включения фичи
    off={} //компонент, который будет отображаться после выключения фичи
  />
}
```

Для автоматического удаления фичи использовать скрипт [`removefeature.ts`](./scripts/remove-feature.ts).  
Скрипт принимает 2 аргумента:

1. Название удаляемого фича-флага
2. Состояние (on/off)

## <a id="entities" ></a>Сущности (entities)

- [Article](/src/entities/Article/Readme.md)
- [Comment](/src/entities/Comment/Readme.md)
- [Country](/src/entities/Country/Readme.md)
- [Currency](/src/entities/Currency/Readme.md)
- [Notification](/src/entities/Notification/Readme.md)
- [Profile](/src/entities/Profile/Readme.md)
- [Rating](/src/entities/Rating/Readme.md)
- [User](/src/entities/User/Readme.md)

## <a id="development" ></a>Этапы разработки

Более подробную информацию об этапах разработки можете ознакомиться [здесь](/docs/development.md)

## <a id="next" ></a> Что планируется сделать

- Задокументировать features
- Покрыть проект e2e тестированием, а также дописать тесты на существующие компоненты, функции
