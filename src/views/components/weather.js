import React, { Component, PropTypes } from 'react';
import './weather.css';

class Weather extends Component {

	static propTypes = {
		temperature: PropTypes.number,
		onRefresh: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.handleRefreshClick = this.handleRefreshClick.bind(this);
	}

	handleRefreshClick() {
		this.props.onRefresh();
	}

	render() {
		return (
			<div className="weather">
				The temperature in Heidelberg is: {this.props.temperature || "--"}° Celsius<br/>
				<button onClick={this.handleRefreshClick}>Refresh</button>
			</div>
		);
	}
}

export default Weather;

/*
 TOUR (6): This the weather view component counter part to the controller, we
 just saw. Do you remember, how we set the temperature property and supplied the
 onRefresh action point? You will find those two fellows here again.

 On line 24 we are actually displaying the temperature in our copy text (or "--",
 as long as we haven't got the data from the server).

 On line 18, we also call onRefresh. In this component you can also see, how
 UI events can be catched with react. On line 25 you can see the use of the
 onClick attribute on button. We bind the onClick event to our own handleRefreshClick
 method. Please also note, that unfortunately we also have to do implicit binding of 'this'
 in javascript classes (you see this on line 14). This sucks, but currently that's
 how it's done. If we don't do it, 'this' within handleRefreshClick would not refer to
 this Weather component.

 Lastly, look at line 6-9. This is an optional convenience thing. We can define the properties
 in detail, that this components expects. This is only for development, as you get
 early and informative errors, if someone tries to use your view component in unexpected ways.
 for example, we specify, that onRefresh should be a function and is indeed required
 (so cannot be null or undefined).

 Continue the tour at /src/actions/weather.js
 */