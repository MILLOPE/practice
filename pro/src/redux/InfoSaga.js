import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

let agree = 21;

const ajax = (params) => new Promise((resolve) => {
  console.log('ajax params',params);
  setTimeout(() => {
    agree += 1;
    resolve(agree);
  },1000)
});

class InfoApi {
  static setAgreeAjax(newsid) {
    return ajax(newsid).then((agree) => agree);
  }
}

function* setAgreeFunc(action) {
  let getAgree = yield call(InfoApi.setAgreeAjax, action.newsid);
  yield put({type:"INFO_ADDCLICK",num: getAgree});// dispatch
}

function* testFunc() {
  alert('test');
}

export function* InfoSaga() {
  yield takeEvery("setAgree", setAgreeFunc);
  yield takeEvery("test", testFunc);
}
