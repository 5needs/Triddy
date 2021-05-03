import React from "react";
import './Conversation.css';
import MessageList from './../messageList/MessageList';
import conversations from './../data/data';

class Conversation extends React.Component {
	render(){
		if (this.props.location !== undefined){
			return (
			  <div className="scrollable content">
				<MessageList author={this.props.location.state.author} messages={this.props.location.state.messages} />
			  </div>
			);
		}
		else{
			return(
			<div>
				<MessageList author={conversations[0].author} messages={conversations[0].messages}/>
			</div>
			);
		}
	}
}
export default Conversation;
