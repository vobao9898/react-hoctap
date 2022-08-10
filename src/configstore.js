import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './store/index';
import postsSaga from './saga/index';
const composeEnhances =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhances(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(postsSaga);

export default store;