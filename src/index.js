import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './routes/router';

ReactDom.render(
  getRouter(), document.getElementById('app'));