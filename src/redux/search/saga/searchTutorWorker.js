import { call, put } from "redux-saga/effects";
import { loadPostSuccess, loadMoreDateSuccess, nextPage, loadPostFail } from "../../search";

export function* searchTutorWorker(action) {

  try {

    const { payload: { term, page } } = action
    console.log('term', action)


    const URL = `https://newsapi.org/v2/everything?q=${term}&apiKey=793334a0847f4ceda2ccd0cc922320c5&page=${page}`

    const response = yield call(() => fetch(URL));


    const posts = yield response.json();


    if (page === 1) {
      yield put(loadPostSuccess(posts.articles));

    } else {
      yield put(loadMoreDateSuccess(posts.articles));

    }

    yield put(nextPage());


  } catch (err) {
    // TODO: handle errors
    console.log(err);
    yield put(loadPostFail())
  }
}
