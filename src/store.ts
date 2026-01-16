import { applyMiddleware, compose, createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from './persistReducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['volatile'],
};
const middleware = [thunk];

const composeEnhancers =
  (globalThis as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = persistCombineReducers(config, persistReducer);
const enhancers = [applyMiddleware(...middleware)];
const store = createStore(reducers, undefined, composeEnhancers(...enhancers));
export const persistor = persistStore(store, null, () => {});

// HMR setup
if ((globalThis as any).module?.hot) {
  (globalThis as any).module.hot.accept('./persistReducer', () => {
    const nextRootReducer = require('./persistReducer').persistReducer;
    store.replaceReducer(persistCombineReducers(config, nextRootReducer));
  });
}

export default store;
