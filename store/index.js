import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import game from '../reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whilelist: ['game'],
};

const persistedReducer = persistReducer(persistConfig, game);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
