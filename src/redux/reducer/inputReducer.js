import {createSlice} from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    userData: [],
  },
  reducers: {
    saveUserData: (state, action) => {
      console.log(action.payload, 'action.payload');
      state.userData = action.payload;
    },
  },
});

export const {saveUserData} = inputSlice.actions;

export default inputSlice.reducer;
