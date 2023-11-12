import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: [],
  location: {},
  isLocation: false,
}

export const counterSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    getAutoComplete: (state, action) => {
        state.locations = action.payload;
        state.isLocation = false;
    },  
    setlocation: (state, action) => {
      state.location = action.payload
    },
    setIslocation: (state, action) => {
      state.isLocation = action.payload
    }
  },
})


// Action creators are generated for each case reducer function
export const { getAutoComplete, setlocation, setIslocation } = counterSlice.actions

export default counterSlice.reducer