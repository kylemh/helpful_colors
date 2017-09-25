import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from '../Reducers';

let middleware = [promise(), thunk, routerMiddleware(createHistory())];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, logger];
}

export default createStore(reducers, applyMiddleware(...middleware));
