export const layoutValues = ['grid', 'masonry'] as const;
export type TLayoutValues = typeof layoutValues[number];

export enum currentLayoutNames {
  grid = 'Сетка',
  masonry = 'Плиточная верстка',
}

export const templateValues = ['hover', 'classic'] as const;
export type TTemplateValues = typeof templateValues[number];

export enum templateNames {
  hover = 'Наведения',
  classic = 'Классическая',
}

export const navigationValues = ['pagination', 'load-more'] as const;
export type TNavigationValues = typeof navigationValues[number];

export enum navigationNames {
  pagination = 'Пагинация',
  'load-more' = "Кнопка 'Загрузить еще'",
}

export interface ISettingsData {
  layout: {
    current: TLayoutValues,
    params: {
      grid: {
        columns: number,
        rows: number,
      },
      masonry: {
        columns: number,
        rows: number,
      }
    }
  },
  template: TTemplateValues,
  navigation: TNavigationValues,
}

export interface ISettings {
  layout: {
    current: TLayoutValues,
    columns: number,
    rows: number,
  },
  template: TTemplateValues,
  navigation: TNavigationValues,
}

export enum settingsActionTypes {
  FETCH_SETTINGS = 'FETCH_USERS',
  FETCH_SETTINGS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_SETTINGS_ERROR = 'FETCH_USERS_ERROR',
} 

interface IFetchSettingsAction {
  type: settingsActionTypes.FETCH_SETTINGS;
}
interface IFetchSettingsSuccessAction {
  type: settingsActionTypes.FETCH_SETTINGS_SUCCESS;
  payload: ISettings;
}
interface IFetchSettingsErrorAction {
  type: settingsActionTypes.FETCH_SETTINGS_ERROR;
  payload: string;
}
export type TSettingsAction = IFetchSettingsAction | IFetchSettingsSuccessAction | IFetchSettingsErrorAction;

export interface ISettingsState {
  settings: ISettings | null,
  loading: boolean,
  error: null | string,
}