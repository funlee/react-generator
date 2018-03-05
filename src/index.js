import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'common/App/App';
import './assets/style/reset.css';
import './assets/style/main.css';

renderWithHotReload(App);

if (module.hot) {
  module.hot.accept('common/App/App', () => {
    const NextApp = require('common/App/App').default;
    renderWithHotReload(NextApp);
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Router>
        <RootElement/>
      </Router>
    </AppContainer>,
    document.getElementById('app')
  )
}
