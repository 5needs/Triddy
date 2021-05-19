import React from 'react';
import { Switch, Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Login } from './login/Login';
import { PrivateRoute } from './PrivateRoute';
import RegisterProfile from './registerProfile/pages/Register'

export const history = createBrowserHistory({forceRefresh:true});

export default class Routes extends React.Component {

	 /* istanbul ignore next */
	TestView = () => (
		<div className="testView">
		  Hola
		</div>
	  );

	render(){
		return(
			<Router history={history}>
				<Switch>
					<Route path={"/register_user"} component={RegisterProfile} />	
					<Route path={"/login"} component={Login} />
					{/* <PrivateRoute path={"/"} component={this.TestView}/> */}
				</Switch>
			</Router>
		);
	}
}
