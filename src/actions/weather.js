/**
 * Created by mail on 06.01.2017.
 */

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const PUT_WEATHER_RESPONSE = 'PUT_WEATHER_RESPONSE';

export function getWeather() {
	return { type: REQUEST_WEATHER };
}

/*
 TOUR (7): We are now leaving the world of view components and redux
 controllers for a little bit to look into the data side of things.

 It starts by understanding the redux actions. I here reprint, what
 we saw in our WeatherController (/src/controllers/weather.js#17):
 dispatch(getWeather());

 getWeather is the method we see here above on line 8-10. Lame, right?
 It doesn't do much but return an object with a property called 'type'.

 This is all it takes to build an action event object. Additionally, you
 can add as much payload data, as you want, if your concrete action
 demands that. For instance, in order to make our weather component a bit
 more generic, we could add a city to our action object, so that we can
 define, for which city the weather information should be requested.
 This would look like this:
 export function getWeather(city) {
 	return { type: REQUEST_WEATHER, city }; // note the ES6 shorthand notation for 'city: city'
 }

 Now this seems a bit trivial, but it is a good guideline to separate
 the actions from the rest of the code, because actions can be
 a) dispatched from different places and
 b) caught at different places

 There are essentially two things, that can listen to such actions:

 - The so-called reducers of redux. Reducers can act on certain actions
   and make changes to the store based on the action and eventual payload.
   We will look at this later on.
 - Every middleware of redux. Currently we only use redux-saga as a middleware
   (you were able to see that in /src/index.js#23), so in our case redux saga
   can act on actions as well.

 Continue the tour at /src/sagas/sagas.js
 */