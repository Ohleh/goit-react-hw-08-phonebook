import { createSlice } from '@reduxjs/toolkit';

import { userApi } from './userApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSucces(state, { payload }) {
      const { user, token } = payload;
      state.name = user.name;
      state.email = user.email;
      state.token = token;
    },
    getCurrentSuccess(state, { payload }) {
      state.name = payload.name;
      state.email = payload.email;
    },
  },
  extraReducers: builder => {
    // builder.addMatcher(
    //   userApi.endpoints.login.matchFulfilled, // екшн на який ми хочемо піжписатися
    //   (state, { payload }) => {
    //     const { user, token } = payload;

    //     state.name = user.name;
    //     state.email = user.email;
    //     state.token = token;
    //   }
    // );

    // userSuccess
    builder.addMatcher(
      userApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
      }
    );

    // userError
    builder.addMatcher(
      userApi.endpoints.currentUser.matchRejected,
      (state, { payload }) => {
        if (payload === '401') {
          state.token = '';
        }
      }
    );
  },
});

export const { loginSucces, getCurrentSuccess } = userSlice.actions; // експорт екшенів

export default userSlice.reducer;
