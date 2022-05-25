import { all, takeLatest } from 'redux-saga/effects'

import { searchTutorWorker } from './searchTutorWorker'


export function* searchWatcher() {
  try {
    yield all([takeLatest('search/loadPostRequest', searchTutorWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
