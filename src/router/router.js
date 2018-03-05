import React from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!components/Home/Home';
import About from 'bundle-loader?lazy&name=about!components/About/About';

import Loading from 'common/Loading/Loading';
import NotFound from 'bundle-loader?lazy&name=notFound!common/NotFound/NotFound';


const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
);

export default () => (
  <div>
    <Switch>
      <Redirect exact from="/" to="home" />
      <Route path="/home" component={createComponent(Home)}/>
      <Route path="/about" component={createComponent(About)}/>

      <Route component={createComponent(NotFound)} />
    </Switch>
  </div>
);
