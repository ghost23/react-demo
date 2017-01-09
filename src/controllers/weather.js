/**
 * Created by mail on 01.11.2016.
 */
import { connect } from 'react-redux'
import Weather from '../views/components/weather';
import { getWeather } from '../actions/weather';

const mapStateToProps = (state) => {
	return {
		temperature: state.weather
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRefresh: () => {
			dispatch(getWeather());
		}
	};
};

const WeatherController = connect(
	mapStateToProps,
	mapDispatchToProps
)(Weather);

WeatherController.prototype.componentWillMount = function() {
	let state = this.store.getState();
	if(!state.weather) {
		this.store.dispatch(getWeather());
	}
};

export default WeatherController;

/*
 TOUR (5): Here we are in our first redux controller component (or as
 redux itself calls it for some reason: container component). The controller
 connects the redux store, where all the app data is, with a view component.
 You can see the linkage in line 22-25. The view component, that we connect
 to, is Weather from /src/view/components/weather.js

 So you can imagine this controller to be a kind of data-connection-wrapper
 for the actual view component. The result of the connect method call in line
 22 is in fact a react component again. A react component, that wraps the actual
 view component.

 One nice side-effect of this is, by, the way, that you can start developing
 just the view component with static dummy data and once you're satisfied, you
 can simply wrap the view component with a controller component and just exchange
 it in the places, where you used the view component before.

 This controller component does three things:

 - It takes data from the store and pushes it into the fitting properties
   of the view component. You can see this happening on line 10. There we take
   a value from the store (state.weather) and put it into the property temperature
   of the view component. As a guideline, we should try to only pass flat data
   to the view components, as this makes things easier later on in the view
   component. So try to avoid pushing deeply nested data objects into the view
   components. More on this later.
 - It supplies action points for the view component to call. A view component should
   be ignorant of business logic or data logic. So all a view component should be
   able to do, is signaling user intend. In line 16-18 you can see such an intend.
   The controller supplies the view component with an action point called 'onRefresh'.
   The view component can call this function to signal the user intend to refresh
   the weather information. On line 17 you can see, what the controller does, when
   that happens. It dispatches an "action". Actions are an essential part of redux.
   They are like events. You dispatch actions and various other parts of the application
   can listen to these actions and do stuff then. We will see some of these parts
   later on.
 - It optionally dispatches initial actions, if something needs to be done in the first
   run. For example, we want our weather component to show weather data right away. We do
   that on line 30. Note, that this essentially the same thing, as we already saw on line
   17. It wouldn't have to be this way, but in this case, it just fits. Another thing you
   might note here, is on line 27, the function name 'componentWillMount'. This is not
   redux-specific, but react-specific. React components do have a life cycle. It starts
   with mounting a react component in the DOM, goes on with updating a component in the
   DOM and ends with unmounting the component from the DOM. Accordingly, for all these
   stages, there are life cycle hooks, we can use to do things in those respected situations.
   For more information on the life cycle, see:
   https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle

 Continue the tour at /src/views/components/weather.js
 */