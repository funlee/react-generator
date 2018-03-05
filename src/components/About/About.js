import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }
  render() {
    return (
      <div>
        <h1>this is about page!!</h1>
      </div>
    )
  }
}

export default hot(module)(About);
