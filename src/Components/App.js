import React from 'react';
import Conversation from './conversation/Conversation';
import {BrowserRouter as Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({forceRefresh:true});

export default class Rutas extends React.Component {
	render(){
		return(
			<BrowserRouter history={history}>
				<Switch>
				<Route path={"/Conversation"} component={Conversation}/>
				</Switch>
			</BrowserRouter>
		);
	}
	
}
