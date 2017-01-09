import React, {Component} from 'react';
import Helmet from 'react-helmet';
import logo from '../logo.svg';
import './page-frame.css';

/*
 TOUR (3): This is the PageFrame component, which represents
 the general frame for the website. Here you can see the
 minimal way of describing a react component. A react component
 needs to at least have a render method, that returns the html
 part for this component. Of course, there can be additional
 methods, but for now, let's focus on the render method. The
 render method needs to return ONE root node, which can have subnodes.
 This means, that you cannot return two siblings. In this component,
 the div with className "page-frame" is the single root node for
 this component. By the way, className stands for a css class. We
 need to call it className, because in JavaScript 'class' is a
 reserved keyword.

 In line 61 - 64 you can see the general page header, for instance.
 In line 65 you see the templating syntax of react. With curly braces
 you can insert javascript values. In this case, the children property
 of this component is inserted.

 In order to understand, what 'children'
 means, I reprint a part of the index.js again:
 <Route path="/" component={PageFrame} >
	 <IndexRoute component={Home} />
	 <Route path="about" component={About} />
 </Route>
 You see, that there PageFrame is used, and WITHIN PageFrame, there can
 be either Home or About, depending on the URL. So Home or About will be
 a child of PageFrame at runtime.

 So in general, nested components in the tree will be available in the
 'children' property. 'props' is the central place, where properties are
 collected in a react component. Every attribute, that you put in a react tag,
 will be present as a property in 'props'.

 Also, at the top of this file, you can see, how css files are included.
 In line 4 we import page-frame.css, which holds only the styles for this
 component. As a general guideline, it is good practice to have distinct
 css files for each component, so you see everything in the same place.

 Lastly, on line 60 you see the Helmet tag. Helmet is a library, that
 enables you to set information in the head of your website. So although
 the helmet tag is within this component, it actually set something in
 the head, in this case the title. You can also see the attribute titleTemplate.
 We don't set the whole title here, because this is only the general page-frame,
 but we define the structure for the titles here. In the concrete page
 components we will set the title, which will replaced at "%s" in titleTemplate.

 Continue the tour at /src/views/pages/home.js
 */

class PageFrame extends Component {
	render() {
		return (
			<div className="page-frame">
				<Helmet title="Website" titleTemplate="React Demo - %s" />
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
