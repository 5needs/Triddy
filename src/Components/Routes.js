import React from 'react';
import {BrowserRouter as Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Login } from './login/Login';
import RegisterProfile from './registerProfile/pages/Register'

export const history = createBrowserHistory({forceRefresh:true});

export default class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter history={history}>
				<Switch>
					<Route path={"/regis_profile"} component={RegisterProfile} />
					<Route path={"/login"} component={Login} />
				</Switch>
			</BrowserRouter>
		);
	}
	
}
