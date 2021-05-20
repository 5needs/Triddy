import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Login } from './login/Login';
import { PrivateRoute } from './PrivateRoute';
import { NotificationComponent } from './notifications/NotificationComponent';
import { FavoritesComponent } from './favorites/FavoritesComponent';
import RentCheckout from './rent-product/RentCheckout';
import RegisterCheckout from './Product-register/RegisterCheckout';

export const history = createBrowserHistory({forceRefresh:true});

export default class Routes extends React.Component {

	render(){
		return(
			<Router >
				<Switch>
					<Route path={"/login"} component={Login} />
					<PrivateRoute path={"/favorites"} component={FavoritesComponent}/>
					<PrivateRoute path={"/notifications"} component={NotificationComponent}/>
					<PrivateRoute path={"/rent"} component={RentCheckout}/>
					<PrivateRoute path={"/products/register"} component={RegisterCheckout}/>
				</Switch>
			</Router>
		);
	}
}
