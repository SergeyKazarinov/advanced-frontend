# Проект находится на этапе разработки

## Содержание

- [Быстрый старт:](#start)
- [Скрипты](#scripts)
- [Архитектура проекта](#fsd)
- [Работа с переводами](#translate)
- [Тесты](#tests)
- [Линтинг](#linting)
- [Storybook](#storybook)
- [Конфигурация проекта](#config)
- [CI pipeline и pre commit хуки](#ci)
- [Работа с данными](#server)
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
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint` - Проверка ts файлов линтером
- `npm run lint:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run build-storybook` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки

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

В проекте используются 3 вида тестов:
1) Обычные unit тесты на jest - `npm run test`
2) Тесты на компоненты с React testing library -`npm run test`
3) Скриншотное тестирование с loki `npm run test:ui`

## <a id="linting" ></a>Линтинг

В проекте используется [ESlint](https://eslint.org/) для проверки TypeScript кода и Stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin [eslint-plugin-fsd-import-plugin](https://www.npmjs.com/package/eslint-plugin-fsd-import-plugin),
который, в настоящий момент имеет 1 правило:
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля

#### Запуск линтеров
- `npm run lint` - Проверка ts файлов линтером
- `npm run lint:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

## <a id="storybook" ></a>Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью [storybook-addon-mock](https://storybook-addon-mock.netlify.app/?path=/docs/docs-introduction--docs).

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

#### Запуск сторибук
- `npm run storybook`

Документация [Storybook](https://storybook.js.org/)

## <a id="config" ></a>Конфигурация проекта

Для разработки проект содержит Webpack-конфиг - ./config/build  
Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

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

## <a id="development" ></a>Этапы разработки

Более подробную информацию об этапах разработки можете ознакомиться [здесь](/docs/development.md)

## <a id="next" ></a> Что планируется сделать
- Задокументировать entities и features
- Покрыть проект e2e тестированием, а также дописать тесты на существующие компоненты, функции
- Добавить оценку статьи
- Настроить Vite
- Расширить собственный ESLint плагин новыми правилами
- Добавить prettier
- Сделать редизайн проекта
