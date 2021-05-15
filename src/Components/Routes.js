import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Login } from './login/Login';


export const history = createBrowserHistory({forceRefresh:true});

export default class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter history={history}>
				<Switch>
					<Route path={"/login"} component={Login}/>
				</Switch>
			</BrowserRouter>
		);
	}
	
}
