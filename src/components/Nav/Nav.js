import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li><Link to="/">首页</Link></li>
        <li><Link to="/page1">Page1</Link></li>
      </ul>
    )
  }
}
