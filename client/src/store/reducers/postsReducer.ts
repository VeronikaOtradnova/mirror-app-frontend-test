import { IPostsState, postsActionTypes } from "../../types/posts";

const initialState: IPostsState = {
  posts: [],
  error: null,
  loading: false,
  total: 0,
}

export function postsReducer(state = initialState, action: any): IPostsState {
  switch (action.type) {
    case postsActionTypes.FETCH_POSTS:
      return { 
        loading: true, 
        error: null, 
        posts: state.posts, 
        total: state.total 
      };
    case postsActionTypes.FETCH_POSTS_SUCCESS:
      return { 
        loading: false, 
        error: null, 
        posts: action.payload.append ? [...state.posts, ...action.payload.posts] : action.payload.posts, 
        total: action.payload.total,
      };
    case postsActionTypes.FETCH_POSTS_ERROR:
      return { 
        loading: false, 
        error: action.payload, 
        posts: state.posts,
        total: state.total,
      };
    case postsActionTypes.RESET_POSTS:
      return initialState;
    default:
      return state;
  }
}

