import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import UserReduce from './../redux/UserReduce';
import { UserSaga, UserSagaNew } from './../redux/UserSaga';

const saga = createSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(UserReduce, /*preloadedState,*/ composeEnhancers(
  applyMiddleware(saga)
));
// saga.run(UserSaga);
saga.run(UserSagaNew);


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
        <span>用户名：</span>
        <span><input type="text" onChange={(event)=>{
          this.textChange(event,'userName');
        }} /></span>
      </div>
      <div>
        <span>密&nbsp;&nbsp;码：</span>
        <span><input type="text" onChange={(event)=>{
          this.textChange(event,'userPass');
        }} /></span>
      </div>
      <div>
        <span>状态：</span>
        <span className={this.props.Store.getState().isLogin ? 'green' : 'red'}>
          {this.props.Store.getState().isLogin ? '已登录' : '未登录'}</span>
      </div>
      <div>
        <span>用户等级：</span>
        <span>{this.props.Store.getState().isLogin ? this.props.Store.getState().myLevel : '未登录无等级'}</span>
      </div>
      <div>
        <button disabled={this.props.Store.getState().btnDisabled} onClick={this.userSubmit.bind(this)}>登录</button>
        <button onClick={()=>{this.props.Store.dispatch({type: 'LOGIN_OUT'})}}>注销</button>

      </div>
    </div>
  }
}

ReactDOM.render(
  <UserLogin Store={store} />,
  document.getElementById('root')
)
