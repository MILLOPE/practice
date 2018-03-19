import React from "react";
import ReactDOM from "react-dom";

// import MyRouter from "./../components/MyRouter";
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import InfoReduce from '../redux/InfoReduce';
import { setAgree } from '../redux/actions';

// let store = createStore(InfoReduce, applyMiddleware(thunk));

import createSaga from 'redux-saga';
import { InfoSaga } from './../redux/InfoSaga';

const saga = createSaga();
let store = createStore(InfoReduce,  applyMiddleware(saga));
saga.run(InfoSaga);

class InfoDetail extends React.Component {
  componentWillMount() {
    this.props.Store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  addClick() {
    // this.props.Store.dispatch({
    //   type: "INFO_ADDCLICK",
    // })
    // this.props.Store.dispatch(setAgree(101))
    this.props.Store.dispatch({
      type: "setAgree",
      newsid: 101
    });
  }

  addTest() {
    this.props.Store.dispatch({type: "test"});
  }
  
  render() {
    return <div>
      <h2>新闻标题：{this.props.Store.getState().title}</h2>
      <span>当前点赞数：{this.props.Store.getState().agreeNum}</span>
      <div>
        <button onClick={this.addClick.bind(this)}>点赞</button>
        <button onClick={this.addTest.bind(this)}>测试</button>
      </div>
    </div>
  }
}

ReactDOM.render(
    // <MyRouter />
    <InfoDetail Store={store} />
    ,document.getElementById("root")
);
