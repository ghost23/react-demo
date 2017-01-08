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

const sagaMiddleware = createSagaMiddleware();
const demo_reducers = combineReducers(reducers);
let store = createStore(
	demo_reducers,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

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