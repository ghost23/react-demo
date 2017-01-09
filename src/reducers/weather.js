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

/*
 TOUR (9): So now we are in a reducer. As I said, reducers act on
 actions. We can see that in 11-12: The 'weather' reducer acts
 on one specific action: "PUT_WEATHER_RESPONSE". Where do know that
 action from? From /src/sagas/sagas.js, line 11. There the action was
 dispatched (or 'put' in words of redux-saga). And here we act on it.

 The way this works is, that every reducer receives to arguments:
 - state: This is the current state for the weather reducer (means,
   a snapshot of the weather data, we currently have). If the reducer
   was never called once, then we use the DEFAULT_TEMP, which is simply null.
 - action: The action, that comes in. Any action, that gets dispatched from
   within our application, will be caught here. We have to decide, which
   one this reducer should tackle. We do with our switch statement on line 11.

 So our reducer receives the current state and the action. Now there is
 one very important principle for reducer state. It is immutable, means, you
 shall not CHANGE the state of your data, but you should create new data.
 You can of course clone old data and do changes on the clone.

 In our specific case, things are easy, because the temp property is a number,
 which in JavaScript is copied by default, so we're good here. Should you
 have more complicated nested objects, you might have to do more elaborate
 ways of making sure, you do not actually CHANGE the existing state.

 In the end, you simply return that new state, as is happening on line 13.

 In the case, that the action is not of interest to this reducer, we let the 'default'
 case handle this by simply returning the current state without doing anything
 with it.

 Once this is done, redux updates its internal data store and gives a signal
 to react to rerender itself, of course now with the new data. This closes the roundtrip,
 which we have begun in our view component by calling the action method (Tourstep 6).

 We do have a second such roundtrip in this little demo project. I encourage you
 do explore it for yourself. Just take a look at the counter component, which
 is used in the about page.

 That's all for this tour. Thanks for joining me, if you feel, this documentation
 could be improved, do not hesitate do file an issue on github!
 */