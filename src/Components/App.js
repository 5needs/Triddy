import React from 'react';
import ReactDOM from 'react-dom';
import Conversation from './conversation/Conversation';
import ConversationList from './conversationList/ConversationList';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({forceRefresh:true});

export default class App extends React.Component {
	render(){
		return(
			<BrowserRouter history={history}>
				<Switch>
				<Route path={"/Conversations"} component={ConversationList}/>
				<Route path={"/Conversation"} component={Conversation}/>
				</Switch>
			</BrowserRouter>
		);
	}
	
}
