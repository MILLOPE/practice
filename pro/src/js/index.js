import React from "react";
import ReactDOM from "react-dom";

// import MyRouter from "./../components/MyRouter";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import InfoReduce from '../redux/InfoReduce';
import { setAgree } from '../redux/actions';

let store = createStore(InfoReduce, applyMiddleware(thunk));

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
    this.props.Store.dispatch(setAgree(101))
  }

  render() {
    return <div>
      <h2>新闻标题：{this.props.Store.getState().title}</h2>
      <span>当前点赞数：{this.props.Store.getState().agreeNum}</span>
      <div>
        <button onClick={this.addClick.bind(this)}>点赞</button>
      </div>
    </div>
  }
}

ReactDOM.render(
    // <MyRouter />
    <InfoDetail Store={store} />
    ,document.getElementById("root")
);
