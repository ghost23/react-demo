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
