import React from 'react';
import { Switch, Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({forceRefresh:true});

export default class Routes extends React.Component {
	constructor(props){
		super(props);
		this.changeColor = this.changeColor.bind(this);
	}

	render(){
		return(
			<Router history={history}>
				<Switch>
				</Switch>
			</Router>
		);
	}
	
	changeColor(code){
        document.body.style.backgroundColor = code;
    }
}
