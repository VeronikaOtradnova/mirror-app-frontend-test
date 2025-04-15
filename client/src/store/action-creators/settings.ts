import { Dispatch } from "redux";
import { ISettingsData, layoutValues, navigationValues, settingsActionTypes, templateValues, TSettingsAction } from "../../types/settings";
import { postsActionTypes, TPostsAction } from "../../types/posts";

export const fetchSettings = () => {
  return async (dispatch: Dispatch<TSettingsAction | TPostsAction>) => {
    try {
      dispatch({ type: settingsActionTypes.FETCH_SETTINGS });
      dispatch({ type: postsActionTypes.RESET_POSTS });
      const baseUrl = import.meta.env.VITE_API_URL;
      const resp = await fetch(`${baseUrl}/settings`);

      if (!resp.ok) {
        throw new Error(`Ошибка при загрузке настроек: ${resp.status}`);
      }

      const data:ISettingsData = await resp.json();

      if (!layoutValues.includes(data.layout.current)) {
        throw new Error('Неизвестный вид шаблона. Попробуйте обновить настройки.');
      } else if (!templateValues.includes(data.template)) {
        throw new Error('Неизвестный вид карточки. Попробуйте обновить настройки.');
      } else if (!navigationValues.includes(data.navigation)) {
        throw new Error('Неизвестный вид навигации. Попробуйте обновить настройки.');
      }

      dispatch({ type: settingsActionTypes.FETCH_SETTINGS_SUCCESS, payload: {
        layout: {
          current: data.layout.current,
          columns: data.layout.params[data.layout.current].columns,
          rows: data.layout.params[data.layout.current].rows,
        },
        navigation: data.navigation,
        template: data.template,
      } })
    } catch (e) {
      dispatch({
        type: settingsActionTypes.FETCH_SETTINGS_ERROR,
        payload: 'Ошибка при загрузке настроек'
      })
    }
  }
}