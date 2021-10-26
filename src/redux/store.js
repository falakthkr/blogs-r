  import { createStore, applyMiddleware } from "redux"
  import thunk from "redux-thunk"
  import loginReducer from "./auth/reducer"
  // const rootReducer = combineReducers({
  //     login:loginReducer
  // })
  const store = createStore(loginReducer, applyMiddleware(thunk))
  export { store, loginReducer }