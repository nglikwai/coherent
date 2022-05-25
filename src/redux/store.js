import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './rootSaga'
import searchReducer from './search'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)


