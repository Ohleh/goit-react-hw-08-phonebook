import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './phoneApi';
import { phoneBookSlice } from './phoneBookSlice';
import user from './user';
import { userApi } from './userApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    findContact: phoneBookSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
