  import { createStore, applyMiddleware, combineReducers } from "redux"
  import thunk from "redux-thunk"
  import loginReducer from "./auth/reducer"
  import postsReducer from "./posts/reducer"
  const rootReducer = combineReducers({
      login: loginReducer,
      posts: postsReducer,
  })
  const store = createStore(rootReducer, applyMiddleware(thunk))
  export { store, loginReducer }