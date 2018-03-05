import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li><Link to="/home">home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    )
  }
}
