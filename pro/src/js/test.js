import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';

import TestReduce from './../redux/TestReduce';

let store = createStore(TestReduce,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class Test extends React.Component {
  render() {
    const {getCount, addInput} = this.props;
    // alert(getCount);
    let result = [];
    let listInput = () => {
      for(let i = 1;i <= getCount; i+=1) {
        result.push(<div key={i}>
          <span>输入框：</span>
          <span><input type="text" /></span>
        </div>)
      }
      return result;
    }

    return <div>
      <div>
        <span><input type="button" onClick={addInput} value="添加"/></span>
      </div>
      {listInput()}
    </div>
  }
}

function mapStateToProps(state, ownProps) {
  return {
    getCount: state.count
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addInput: () => {
      dispatch({type: 'ADD'})
    }
  }
}

// 首字母必须大写
const App = connect(mapStateToProps, mapDispatchToProps)(Test);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
