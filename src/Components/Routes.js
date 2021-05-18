import React from 'react';
import { Switch, Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Login } from './login/Login';
import { PrivateRoute } from './PrivateRoute';

export const history = createBrowserHistory({forceRefresh:true});

export default class Routes extends React.Component {

	TestView = () => (
		<div className="testView">
		  Hola
		</div>
	  );

	render(){
		return(
			<Router history={history}>
				<Switch>
					<Route path={"/login"} component={Login} />
					<PrivateRoute path={"/"} component={this.TestView}/>
				</Switch>
			</Router>
		);
	}
}
