import React, { Component, PropTypes } from 'react';
import './counter.css';

class Counter extends Component {

	static propTypes = {
		count: PropTypes.number.isRequired,
		onIncrementCount: PropTypes.func.isRequired,
		onResetCounter: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
		this.handleResetClick = this.handleResetClick.bind(this);
	}

	handleIncreaseClick() {
		this.props.onIncrementCount(1);
	}

	handleResetClick() {
		this.props.onResetCounter();
	}

	render() {
		return (
			<div className="counter">
				Current count: {this.props.count}<br/>
				<button onClick={this.handleIncreaseClick}>Increase</button>
				<button onClick={this.handleResetClick}>Reset</button>
			</div>
		);
	}
}

export default Counter;
