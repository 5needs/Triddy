import React from 'react';
import './ConversationListItem.css';
import { history } from '../Routes'
import shave from 'shave'

const MY_USER_ID = 1;
class ConversationListItem extends React.Component {
	
	constructor(props) {
		super(props);
		let text = ""
		let message = props.data.messages[props.data.messages.length -1].message;
		if (message.author === MY_USER_ID){
			text = "You: " + message; 
		}
		else{
			text = props.data.author.name + ": " + message;
		}
		this.state = { photo : props.data.author.src, 
					name: props.data.author.name, 
					text: text};
		this.handleMessageSelection = this.handleMessageSelection.bind(this);
	}
	
	componentDidMount() {
		 shave('.conversation-snippet', 20);
	}
	
	render(){
    return (
      <div className="conversation-list-item" onClick={() => { this.handleMessageSelection() }}>
        <img className="conversation-photo" src={this.state.photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ this.state.name }</h1>
		  <p className="conversation-snippet">{ this.state.text }</p>
		</div>
      </div>
    );
	}
	
	handleMessageSelection(){
		const state = { author : this.props.data.author, 
						messages: this.props.data.messages }
		history.push({state : state, 
					pathname: "/conversation"});
		
	}
	
	
}
export default ConversationListItem;