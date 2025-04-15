export interface IPost {
  caption: string,
  id: string,
  comments: number,
  likes: number,
  date: string,
  permalink: string,
  userId: string,
  user: {
    id: string,
    username: string,
    postId: string
  }
}

export enum postsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  RESET_POSTS = 'RESET_POSTS',
} 

interface IFetchPostsAction {
  type: postsActionTypes.FETCH_POSTS;
}
interface IFetchPostsSuccessAction {
  type: postsActionTypes.FETCH_POSTS_SUCCESS;
  payload: {
    posts: IPost[];
    append: boolean;
    total: number;
  };
}
interface IFetchPostsErrorAction {
  type: postsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}
interface IResetPostsAction {
  type: postsActionTypes.RESET_POSTS;
}
export type TPostsAction = IFetchPostsAction | IFetchPostsSuccessAction | IFetchPostsErrorAction | IResetPostsAction;

export interface IPostsState {
  posts: IPost[],
  total: number,
  loading: boolean,
  error: null | string,
}