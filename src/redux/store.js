import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';

import user from './user';
import { userApi } from './userApi';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, user); // редюсер user

export const store = configureStore({
  reducer: {
    findContact: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: persistedUserReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
  ],
});

export const persistor = persistStore(store);
