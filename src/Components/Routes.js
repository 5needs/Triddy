import React from 'react';
import Conversation from './conversation/Conversation';
import ConversationList from './conversationList/ConversationList';
import ItemsRentados from './itemsRentados/ItemsRentados';
import FormularioCalificacion from './formularioCalificacion/FormularioCalificacion';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Login } from './login/Login';
import EditCheckout from './edit-product/EditCheckout';
import DeleteCheckout from './delete-product/DeleteCheckout';
import RentCheckout from './rent-product/RentCheckout';
import RegisterCheckout from './Product-register/RegisterCheckout'
import Home from './Home/Home';

export const history = createBrowserHistory({forceRefresh:true});

export default class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter history={history}>
				<Switch>
				<Route path={"/Conversations"} component={ConversationList}/>
				<Route path={"/Conversation"} component={Conversation}/>
				<Route path={"/Rentados"} component={ItemsRentados}/>
				<Route path={"/Calificacion"} component={FormularioCalificacion}/>
				<Route path={"/login"} component={Login}/>
				<Route path={"/edit"} component={EditCheckout}/>
				<Route path={"/delete"} component={DeleteCheckout}/>
				<Route path={"/rent"} component={RentCheckout}/>
				<Route path={"/register"} component={RegisterCheckout}/>
				<Route path={"/"} component={Home}/>
				</Switch>
			</BrowserRouter>
		);
	}
	
}
