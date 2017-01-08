/**
 * Created by mail on 06.01.2017.
 */

import fetch from 'isomorphic-fetch';

/**
 * Fetches current weather in Heidelberg. This returns a Promise!
 */
export function fetchCurrentHeidelbergWeather() {
	return fetch(`http://api.openweathermap.org/data/2.5/weather?id=2907911&appid=b21bb99f66880d9884ec533497aad0c7&units=metric`)
		.then(response => response.json());
}