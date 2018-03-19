import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Bundle from './Bundle';
import Loading from 'components/common/Loading/Loading';
import NotFound from 'bundle-loader?lazy&name=notFound!components/common/NotFound/NotFound';

import Home from 'bundle-loader?lazy&name=home!views/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!views/Page1/Page1';


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
      <Route exact path="/" component={createComponent(Home)}/>
      <Route path="/page1" component={createComponent(Page1)}/>
      <Route component={createComponent(NotFound)}/>
    </Switch>
  </div>
);
