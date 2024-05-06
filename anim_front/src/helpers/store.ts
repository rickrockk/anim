import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {thunk, withExtraArgument} from 'redux-thunk';
import reducer from '../reducers/user.reducer';

const mainReducer = combineReducers({
    user: reducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, composeEnhancers(applyMiddleware(withExtraArgument(thunk))));
export default store;