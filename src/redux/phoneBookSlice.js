import { createSlice } from '@reduxjs/toolkit';

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: { filter: '' },
  reducers: {
    findContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { findContact } = phoneBookSlice.actions; // експорт екшенів

export default phoneBookSlice.reducer;
