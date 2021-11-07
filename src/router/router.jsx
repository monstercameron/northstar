import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { injectContext } from "../store/store";

// page imports
import Home from '../pages/Home'
import Match from '../pages/Match'
import Onboarding from "../pages/Onboarding";

function Index() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/match">
					<Match />
				</Route>
				<Route path="/Onboarding">
					<Onboarding />
				</Route>
				<Route path="/budget">
					<div>budget</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default injectContext(Index);