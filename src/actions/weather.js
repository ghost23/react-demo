/**
 * Created by mail on 06.01.2017.
 */

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const PUT_WEATHER_RESPONSE = 'PUT_WEATHER_RESPONSE';

export function getWeather() {
	return { type: REQUEST_WEATHER };
}