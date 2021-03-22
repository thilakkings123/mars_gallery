import { call, put, takeEvery } from "redux-saga/effects";

import { GET_MARS_ROVER_IMAGES } from "./constants";
import { fetchRoverImages } from "../../utils/requests";
import { receiveRoverImages } from "./actions";

export function* getRoverImages(payload) {
  //payload will be the date for the api call fetchrover images
  const response = yield call(fetchRoverImages, payload.data);
  
  //check the response status for success or failer
  if (response.status !== 200) {
    console.log("Something went wrong!");
  } else {
  //if success update the reducer
    let images = response.images;
    yield put(receiveRoverImages(images));
  }
}

export default function* gallerySaga() {
// take every action and call a function
  yield takeEvery(GET_MARS_ROVER_IMAGES, getRoverImages);
}
