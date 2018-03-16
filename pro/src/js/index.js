import React from "react";
import ReactDOM from "react-dom";

// import MyRouter from "./../components/MyRouter";
import { createStore } from 'redux';
import InfoReduce from '../redux/InfoReduce';

let store = createStore(InfoReduce);

class InfoDetail extends React.Component {
  componentWillMount() {
    this.props.Store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  addClick() {
    this.props.Store.dispatch({
      type: "INFO_ADDCLICK",
    })
  }

  render() {
    return <div>
      <h2>新闻标题：{this.props.Store.getState().title}</h2>
      <span>点击量：{this.props.Store.getState().clicknum}</span>
      <div>
        <button onClick={this.addClick.bind(this)}>修改点击量</button>
      </div>
    </div>
  }
}

ReactDOM.render(
    // <MyRouter />
    <InfoDetail Store={store} />
    ,document.getElementById("root")
);
