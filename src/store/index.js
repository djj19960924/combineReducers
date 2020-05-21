import { createStore,applyMiddleware,combineReducers,compose } from 'redux';
import { userReducer } from './reducer/userReducer';
import { listReducer } from './reducer/listReducer';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.window
  .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

const combineReducer = combineReducers({
  user: userReducer,
  list: listReducer
})

const store = createStore(combineReducer,enhancer)

export default store;