// =========== Root Reducer
// import all modules
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';

// import all reducers
import authReducer from './auth';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
