import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import UserReduce from './../redux/UserReduce';
import { UserSaga } from './../redux/UserSaga';

const saga = createSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(UserReduce, /*preloadedState,*/ composeEnhancers(
  applyMiddleware(saga)
));
saga.run(UserSaga);


class UserLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.Store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  textChange(event, key) {
    let updater = {};
    updater[key] = event.target.value;
    this.props.Store.dispatch({type: 'UPDATE_USERFORM', Form: updater});
  }

  userSubmit() {
    this.props.Store.dispatch({type: 'USER_LOGIN'});
  }

  render() {
    return <div>
      <h2>用户登录</h2>
      <div>
        <span>用户名</span>
        <span><input type="text" onChange={(event)=>{
          this.textChange(event,'userName');
        }} /></span>
      </div>
      <div>
        <span>密&nbsp;&nbsp;码</span>
        <span><input type="text" onChange={(event)=>{
          this.textChange(event,'userPass');
        }} /></span>
      </div>
      <div>
        <button disabled={this.props.Store.getState().btnDisabled} onClick={this.userSubmit.bind(this)}>登录</button>
      </div>
    </div>
  }
}

ReactDOM.render(
  <UserLogin Store={store} />,
  document.getElementById('root')
)
