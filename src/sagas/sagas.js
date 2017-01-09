/**
 * Created by mail on 06.01.2017.
 */
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchCurrentHeidelbergWeather } from '../services/weather-api';
import { REQUEST_WEATHER, PUT_WEATHER_RESPONSE } from '../actions/weather';

function* fetchHeidelbergWeather(action) {
	try {
		const weather = yield call(fetchCurrentHeidelbergWeather);
		yield put({type: PUT_WEATHER_RESPONSE, temp: weather.main.temp});
	} catch (e) {
		yield put({type: PUT_WEATHER_RESPONSE, temp: null});
	}
}

export default function* sagas() {
	yield takeLatest(REQUEST_WEATHER, fetchHeidelbergWeather);
}

/*
 TOUR (8): Redux by itself does not have a standard procedure to handle
 asynchronous processes. The usual (means mostly synchronous) flow is:
 - a view component calls an action method (synchronously)
 - a controller component dispatches an action (synchronously)
 - a reducer acts on the action, changes data (synchronously)
 - react rerenders (might be asynchronously)

 So, if we want to do something asynchronously, what to do? We use sagas.

 So if you look at the code above, and you're not familiar with
 ES6 generator functions, you might scratch your head.

 But let's put those generator functions aside for a moment.

 On line 17-19 we see the sagas function. This is a kind of collector
 for all sagas, that we want to use. Currently it is just one saga:
 'fetchHeidelbergWeather' on line 8-15.

 Now, on line 18 we can see, how actions an a concrete saga come together.
 Whenever the action 'REQUEST_WEATHER' is caught, we want to start the
 'fetchHeidelbergWeather' saga. Where does 'REQUEST_WEATHER' come from?
 Look at line 9 in /src/actions/weather.js.

 Ok, now let's dive into the fetchHeidelbergWeather saga. The most important
 thing happens on line 10: We call the function fetchCurrentHeidelbergWeather,
 which we have imported from /src/services/weather-api.js. This fetches the
 weather data from the external http service. This might be confusing, but
 for the moment, please accept, that by the time we are on line 11, we already
 have the weather data (or in case we got an error, we would jump to line 13).

 And once we have the data, we can now put the data into our store. We trigger this
 on line 11. If you look at that line, you will find, that there is an object,
 which looks like an action event object. And that's, what it is. Now the 'put'
 method actually just wraps the dispatch method from redux, which we already know.
 It does so, because this way, unit testing becomes easier later on, but we skip
 that topic for now. Just remember, within saga, put is actually doing a dispatch.

 So, if now you want to know more about generator functions, there is a good
 article here: http://exploringjs.com/es6/ch_generators.html

 Continue the tour at /src/reducers/weather.js
 */