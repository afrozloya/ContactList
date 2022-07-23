import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

// eslint-disable-next-line no-underscore-dangle
const initialState = {
};

middleware = composeWithDevTools(middleware);

const Store = createStore(reducers, initialState, middleware);

sagaMiddleware.run(rootSagas);

export default Store;
