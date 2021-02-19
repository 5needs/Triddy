import React from "react";
import './Conversation.css';
import MessageList from './../messageList/MessageList';
import conversations from './../data/data';


class Conversation extends React.Component {
	render(){
		return (
		  <div className="scrollable content">
			<MessageList author={conversations[0].author} messages={conversations[0].messages} />
		  </div>
		);
	}
}
export default Conversation;
