// <Адресс страницы, позиция скролла>
export type TScrollSchema = Record<string, number>;

export interface IScrollSaveSchema {
  scroll: TScrollSchema;
}
