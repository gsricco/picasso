import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { postsApi } from '../entities/Post/api/getAllPostsAPI'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
