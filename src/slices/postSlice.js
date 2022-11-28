import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {
    postsLoaded: (state, action) => {
      return action.payload
    },
    postAdded: (state, action) => {
      state.unshift(action.payload)
    },
    postRemovedById: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload)
      state.splice(index, 1)
    }
  }
})

export const { postsLoaded, postAdded, postRemovedById } = postSlice.actions

export default postSlice.reducer
