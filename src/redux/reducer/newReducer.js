import {createSlice} from '@reduxjs/toolkit';

let newSlice = createSlice({
  name: 'new',
  initialState: {
    userData: 123434,
  },
  reducers: {
    saveData: (state = initialState, action) => {
      console.log(action.payload, '<---- action.payload');
      state.userData = action.payload;
      //   state.userData.push(...action.payload);
    },
  },
});

export const {saveData} = newSlice.actions;

export default newSlice.reducer;
