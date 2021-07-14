import { createSlice } from '@reduxjs/toolkit'

export const countdownShowerSlice = createSlice({
  name: 'countdownShower',
  initialState: {
    value: true,
  },
  reducers: {
    showCountdown: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      /* console.log('state.value', state.value)
      return !state.value || !state */

      return {
        ...state,
        value: !state.value
      }
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { showCountdown } = countdownShowerSlice.actions

export default countdownShowerSlice.reducer