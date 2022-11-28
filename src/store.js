import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postSlice'
import notificationReducer from './slices/notificationSlice'

const store = configureStore({
  reducer: {
    posts: postReducer,
    notifications: notificationReducer
  }
})

export default store
