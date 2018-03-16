import React from "react";
import ReactDOM from "react-dom";

// import MyRouter from "./../components/MyRouter";
import { createStore } from 'redux';
import InfoReduce from '../redux/InfoReduce';

let store = createStore(InfoReduce);

class InfoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoData: store.getState()
    }
  }

  addClick() {
    store.dispatch({
      type: "INFO_ADDCLICK",
    })
    this.setState({
      infoData: store.getState()
    })
  }

  render() {
    return <div>
      <h2>新闻标题：{this.state.infoData.title}</h2>
      <span>点击量：{this.state.infoData.clicknum}</span>
      <div>
        <button onClick={this.addClick.bind(this)}>修改点击量</button>
      </div>
    </div>
  }
}

ReactDOM.render(
    // <MyRouter />
    <InfoDetail />
    ,document.getElementById("root")
);
