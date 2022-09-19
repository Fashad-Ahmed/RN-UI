import {createSlice} from '@reduxjs/toolkit';
import reduxStore from '../store/index';

const objectSlice = createSlice({
  name: 'object',
  initialState: {
    userData: [
      {
        name: 'dds',
        place: 'ddd',
      },
    ],
  },
  reducers: {
    saveData: (state, action) => {
      if (!state.userData.length > 0) {
        console.log('iff  👉️');
        state.userData = [action.payload];
      } else {
        console.log('else  👉️');
        state.userData = [...state.userData, action.payload];
      }

      //   state.userData.push('4');

      //   state.push(action.payload);
      //   state.userData = action.payload;
      // return [...state.userData, action.payload];
      //   state.userData.push(action.payload);
    },
  },
});

export const {saveData} = objectSlice.actions;

export default objectSlice.reducer;
//
