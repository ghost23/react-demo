import React, { Component } from 'react';
import { Link } from 'react-router';
import WeatherController from '../../controllers/weather';
import './home.css';

class Home extends Component {
	render() {
		return (
			<div className="page-home">
				Yay! This is the home page.
				Let's look at <Link to="/about">about</Link>.
				<div>
					<WeatherController />
				</div>
			</div>
		);
	}
}

export default Home;
