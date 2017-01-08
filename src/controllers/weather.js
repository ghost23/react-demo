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