import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    notificationAdded: (state, action) => {
      state.unshift(action.payload)
    },
    notificationRemovedById: (state, action) => {
      const index = state.findIndex((notification) => notification.id === action.payload)
      state.splice(index, 1)
    }
  }
})

export const { notificationAdded, notificationRemovedById } = notificationSlice.actions

export default notificationSlice.reducer
