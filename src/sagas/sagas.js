/**
 * Created by mail on 06.01.2017.
 */
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchCurrentHeidelbergWeather } from '../services/weather-api';
import { REQUEST_WEATHER, PUT_WEATHER_RESPONSE } from '../actions/weather';

function* fetchHeidelberggWeather(action) {
	try {
		const weather = yield call(fetchCurrentHeidelbergWeather);
		yield put({type: PUT_WEATHER_RESPONSE, temp: weather.main.temp});
	} catch (e) {
		yield put({type: PUT_WEATHER_RESPONSE, temp: null});
	}
}

export default function* sagas() {
	yield takeLatest(REQUEST_WEATHER, fetchHeidelberggWeather);
}