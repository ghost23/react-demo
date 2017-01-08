import React, {Component} from 'react';
import logo from '../logo.svg';
import './page-frame.css';

class PageFrame extends Component {
	render() {
		return (
			<div className="page-frame">
				<div className="page-header">
					<img src={logo} className="page-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default PageFrame;
