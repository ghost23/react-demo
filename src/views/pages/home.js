import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import WeatherController from '../../controllers/weather';
import './home.css';

/*
 TOUR (4): Here we are in the first concrete page component,
 the Home page. You can see the Helmet component again, which
 sets the concrete part of the title on line 34. Also note the
 Link tag on line 36. This is a special react component provided
 by react-router, that enables linking to internal pages AND
 notifying react-router at the same time. In the browser, this is simply
 an 'a' tag. Now when the user clicks on the link, react-router
 changes the browser url accordingly via the browser history API.
 Also, react-router triggers a re-render cycle for react, react
 will rerender, but now react-router will render the about page,
 instead of home.

 Then, on line 38 you see the WeatherController component. This
 is actually not a regular view component, but (as the name suggests)
 a redux controller component. Redux controller components handle
 the link between data from the redux store and a view component.
 We can put controller components anywhere in our react view tree, the
 same way as normal view components.

 Continue the tour at /src/controllers/weather.js
 */

class Home extends Component {
	render() {
		return (
			<div className="page-home">
				<Helmet title="Home Page" />
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
