import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectContext } from "../store/store";

// page imports
import Home from '../pages/Home'

function Index() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home/>
				</Route>
				<Route path="/budget">
					<div>budget</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default injectContext(Index);