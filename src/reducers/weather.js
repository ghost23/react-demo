/**
 * Created by mail on 06.01.2017.
 */

import { PUT_WEATHER_RESPONSE } from '../actions/weather';

const DEFAULT_TEMP = null;

export function weather(state = DEFAULT_TEMP, action) {

	switch(action.type) {
		case PUT_WEATHER_RESPONSE: {
			return action.temp;
		}
		default: {
			return state;
		}
	}
}