import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import './home.scss';

import axios from 'axios';
import API from 'assets/js/API';
import 'mock/home/user';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      age: null
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(API.user)
    .then(res => {
      const dataset = res.data.result
      this.setState({
        user: dataset.user,
        age: dataset.age
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    return (
      <div className="home">
        <h1>This is the <span>home page...</span></h1>
        <h2>To show mock data:</h2>
        <h2>userName: <span>{this.state.user}</span></h2>
        <h2>age: <span>{this.state.age}</span></h2>
      </div>
    )
  }
}

export default hot(module)(Home);
