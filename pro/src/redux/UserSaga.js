import { call, cancel, cancelled, fork, put, take, takeEvery, takeLatest, select } from 'redux-saga/effects'

let agree = 21;

const user = (name, pass) => new Promise((resolve) => {
  setTimeout(() => {
    if(name == 'xiawei' && pass == '123') {
        resolve({
          message:'login success',
          status: 'success',
          token: 'abcdefg'
        });
    }
    else {
      resolve({
        message:'error username or password',
        status: 'error',
        token: 'none'
      })
    }
  },1000);
});

const userLevel = (token) => new Promise((resolve) => {
  setTimeout(() => {
    // reject('error');return false;
    if(token == 'abcdefg') {
      resolve({level: '黄金会员'});
    }
    else {
      resolve({level: 'none'});
    }
  },3000)
})

class UserAPI {
  static userLogin(user_name, user_pass ) {
    return user(user_name,user_pass).then((res) => res);
  }
  static getUserLevel(token) {
    return userLevel(token).then(res=>res);
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
  yield takeEvery('USER_LOGIN', user_login);
}

function* userLogin() {
  try {
    const { token } = yield call(function* (){
      const {userName, userPass} = yield select();
      return (yield call(UserAPI.userLogin, userName, userPass));
    });

    if(token && token !== 'none') {
      yield put({type: 'LOGIN_SUCCESS'});
      yield call(getUserLevel, token);
    }
    else {
      yield put({type: 'LOGIN_ERROR'});
    }
  }
  catch(err) {

  }
  finally {
    if(yield cancelled()) {
      yield put({type: 'UPDATE_USERLEVEL', level: '获取等级取消'});
    }
  }
}

function* getUserLevel(token) {
  const {level} = yield call(UserAPI.getUserLevel, token);
  if(level && level !== 'none') {
    yield put({type: 'UPDATE_USERLEVEL', level})
  }
  else {
    yield put({type: 'UPDATE_USERLEVEL', level: '获取等级失败'});
  }
}

export function* UserSagaNew() {
  while(true) {
    const action = yield take('USER_LOGIN');
    yield put({type: 'ACTIVE_CHANGE', btnDisabled: true});

    // yield call(userLogin);
    const task = yield fork(userLogin);

    yield take('LOGIN_OUT');
    if(task) {
      yield cancel(task)
    }

    yield put({type: 'LOGIN_OUT_DONE'});

    yield put({type: 'ACTIVE_CHANGE', btnDisabled: false});
  }
}
