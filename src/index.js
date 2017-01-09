import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import * as reducers from './reducers/reducers';
import createSagaMiddleware from 'redux-saga'
import PageFrame from './views/page-frame';
import Home from './views/pages/home';
import About from './views/pages/about';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import sagas from './sagas/sagas';

// Initialize redux-saga
const sagaMiddleware = createSagaMiddleware();

// Collect all redux reducers (coming from /src/reducers/reducers.js)
const demo_reducers = combineReducers(reducers);
// Create the redux store. For handling async side effects like IO,
// add redux-sagas as a middleware.
let store = createStore(
	demo_reducers,
	applyMiddleware(sagaMiddleware)
);

// Add the concrete sagas for this project and turn them on.
// This does not mean, that they are run NOW, but that they start to
// listen to actions.
sagaMiddleware.run(sagas);

/*
TOUR (2): This index.js is the main entry point for the javascript.
Here we do most of the setup of the app, mainly four things:

- We setup redux, which will control the data handling and binding
  to our views. This happens in the lines from 17 to 24.
- We setup redux-saga, which handles especially asynchronous calls like
  calling a server API or any other asynchronous flow. This happens
  in the lines 14-15 and 26-29
- We define the URL routes, that we want to handle. We do this in the
  lines 58 to 63 with the help of the react-router library. You see,
  that we handle the initial "/" route with the Home component and the
  "/about" route with the About component. More on these components later.
- We let React start rendering the views. You see this in the lines from
  57 to 66. In line 65 you see, that we render everything into the root
  div tag from the index.html. You can also see the principal way of writing
  react views, which is done in an HTML-ish way to be more readable.
  The upper-most tag is Provider, which comes from redux and is essentially
  reduxs way of connecting its store to the view components. All view components,
  which have a controller, will now have access to the store. More on
  controllers later.

  Continue the tour in /src/views/page-frame.js.
 */

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={PageFrame} >
				<IndexRoute component={Home} />
				<Route path="about" component={About} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);