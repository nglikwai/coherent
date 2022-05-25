import { call, put } from "redux-saga/effects";
import { searchTutorSuccess } from "../../search";

export function* searchTutorWorker(action) {
  try {

    const URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=793334a0847f4ceda2ccd0cc922320c5'
    const response = yield call(() => fetch(URL));


    const posts = yield response.json();

    yield put(searchTutorSuccess(posts.articles));
  } catch (err) {
    // TODO: handle error
    console.log(err);
  }
}
