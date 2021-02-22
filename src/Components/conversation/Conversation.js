import React from "react";
import './Conversation.css';
import MessageList from './../messageList/MessageList';


class Conversation extends React.Component {
	render(){
		return (
		  <div className="scrollable content">
			<MessageList author={this.props.location.state.author} messages={this.props.location.state.messages} />
		  </div>
		);
	}
}
export default Conversation;
