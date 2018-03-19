import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  _handleClick() {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    return (
      <div className="home">
        <h1>this is <span>home page...</span></h1>
        <p>当前计数：{this.state.count}</p>
          <button onClick={() => this._handleClick()}>自增</button>
      </div>
    )
  }
}

export default hot(module)(Home);
