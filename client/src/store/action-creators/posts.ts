import { Dispatch } from "redux";
import { IPost, postsActionTypes, TPostsAction } from "../../types/posts";

export const fetchPosts = (page: number = 1, limit: number = 10, append: boolean = false ) => {
  return async (dispatch: Dispatch<TPostsAction>) => {
    try {
      dispatch({ type: postsActionTypes.FETCH_POSTS });
      const baseUrl = import.meta.env.VITE_API_URL;
      const resp = await fetch(`${baseUrl}/posts?_expand=user&_page=${page}&_limit=${limit}`);

      if (!resp.ok) {
        throw new Error(`Ошибка при загрузке настроек: ${resp.status}`);
      }

      const total = Number(resp.headers.get('x-total-count'));
      const data:IPost[] = await resp.json();
      
      dispatch({ type: postsActionTypes.FETCH_POSTS_SUCCESS, payload: {posts: data, total, append} })
    } catch (e) {
      dispatch({
        type: postsActionTypes.FETCH_POSTS_ERROR,
        payload: 'Ошибка при загрузке настроек'
      })
    }
  }
}