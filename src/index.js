import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes'
import store from './store'

const routes = Routes()

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
