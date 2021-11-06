import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectContext } from "../store/store";

// page imports
import Home from '../pages/Home'
import Match from '../pages/Match'

function Index() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home/>
				</Route>
				<Route path="/match">
					<Match />
				</Route>
			</Switch>
		</Router>
	);
}

export default injectContext(Index);