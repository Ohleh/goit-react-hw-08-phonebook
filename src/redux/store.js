import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from './phoneApi';
// import { phoneBookSlice } from './phoneBookSlice';
import { userSlice } from './user';

import user from './user';
import { userApi } from './userApi';
// import { userSlice } from './user';

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
//
//
// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     findContact: phoneBookSlice.reducer,
// [userApi.reducerPath]: userApi.reducer,
// user,
//   },

//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//     userApi.middleware,
//   ],
// });
//
//

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, user); // редюсер user

export const store = configureStore({
  reducer: {
    // [contactsApi.reducerPath]: contactsApi.reducer, // .mockapi.io
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
