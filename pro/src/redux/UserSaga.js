import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'

let agree = 21;

const user = (name, pass) => new Promise((resolve) => {
  setTimeout(() => {
    if(name == 'xiawei' && pass == '123') {
        resolve({
          message:'login success',
          status: 'success'
        });
    }
    else {
      resolve({
        message:'error username or password',
        status: 'error'
      })
    }
  },1000);
});

class UserAPI {
  static userLogin(user_name, user_pass ) {
    return user(user_name,user_pass).then((res) => res);
  }
}

function* user_login(action) {
  // const getUserName = yield select(state => state.userName);
  // const getUserPass = yield select(state => state.userPass);
  // yield call(UserAPI.userLogin, getUserName, getUserPass)

  yield put({type: 'ACTIVE_CHANGE', btnDisabled: true});
  const getState = yield select();
  const result = yield call(UserAPI.userLogin, getState.userName, getState.userPass);
  alert(result.status);
  yield put({type: 'ACTIVE_CHANGE', btnDisabled: false});
}

export function* UserSaga() {
  yield takeEvery('USER_LOGIN', user_login)
}
