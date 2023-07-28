# Article

Сущноность, которая связана со статьями или списком статей.  
Включает логику работы со статьюей - получение статьи по id

## Public api

### Components  

`ArticleDetails` - Компонент с информацией о статье

`ArticleList` -  Компонент со списком статей

`ArticleViewSelector` - Компонент переключатель отображения списка статьей (плитка, список)

`ArticleSortSelector` - Компонент с выбором сортировки списка статьей

`ArticleTypeTabs` - Компонент с выбором типа статьи

### Types

`IArticle` - Тип, описывающий статью

`IArticleDetailsSchema` - Тип стейта для работы с данными


### Selectors

`getArticleDetailsData` - Селектор для получения информации о текущей открытой статье

### Consts 

`ArticleSortFieldEnum` - Объект для выбора типа сортировки

`ArticleViewEnum` - Объект для выбора типа отображения списка статей

`ArticleTypeEnum` - Объект для фильтра типа статьи