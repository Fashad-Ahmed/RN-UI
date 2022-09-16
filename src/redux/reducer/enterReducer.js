import {createSlice} from '@reduxjs/toolkit';

const enterSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: [],
  },
  reducers: {
    // reset: () => initialState,
    saveUserData: (state, action) => {
      console.log(action.payload, 'is tht ');
      state.userData = action.payload;
    },
  },
});

export const {saveUserData} = enterSlice.actions;

export default enterSlice.reducer;
