import React, { Component } from 'react';
import CounterController from '../../controllers/counter';
import './about.css';

class About extends Component {
	render() {
		return (
			<div className="page-about">
				Yay! This is the about page.
				<div>
					<h4>And here is the great counter</h4>
					<CounterController/>
				</div>
			</div>
		);
	}
}

export default About;
