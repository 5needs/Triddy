import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Login } from './login/Login';

export const history = createBrowserHistory({forceRefresh:true});

export default class Routes extends React.Component {

	render(){
		return(
			<Router>
				<Switch>
					<Route path={"/login"} component={Login} />
				</Switch>
			</Router>
		);
	}
}
