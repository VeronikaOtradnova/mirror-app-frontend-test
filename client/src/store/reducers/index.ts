import { combineReducers } from "redux"
import { settingsReducer } from "./settingsReducer"
import { postsReducer } from "./postsReducer"

export const rootReducer = combineReducers({
  settings: settingsReducer,
  posts: postsReducer,
})
export type TRootState = ReturnType<typeof rootReducer>