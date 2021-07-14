import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import countdownShowerReducer from './slices/countdownShower'

export default configureStore({
  reducer: {
      counter: counterReducer,
      countdownShower: countdownShowerReducer
  },
})