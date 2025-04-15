import { ISettingsState, settingsActionTypes } from "../../types/settings";

const initialState: ISettingsState = {
  settings: null,
  error: null,
  loading: false,
}

export function settingsReducer(state = initialState, action: any): ISettingsState {
  switch (action.type) {
    case settingsActionTypes.FETCH_SETTINGS:
      return { loading: true, error: null, settings: state.settings };
    case settingsActionTypes.FETCH_SETTINGS_SUCCESS:
      return { loading: false, error: null, settings: action.payload };
    case settingsActionTypes.FETCH_SETTINGS_ERROR:
      return { loading: false, error: action.payload, settings: state.settings }
    default:
      return state;
  }
}

