import React from 'react';
import Compose from './../compose/Compose';
import Toolbar from './../toolBar/ToolBar';
import Message from './../message/Message';
import moment from 'moment';


import './MessageList.css';

const MY_USER_ID = 1;


class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { messages: this.props.messages, author : this.props.author};
		this.renderMessages = this.renderMessages.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}

	renderMessages () {
		let i = 0;
		let messageCount = this.state.messages.length;
		let tempMessages = [];

		while (i < messageCount) {
			let previous = this.state.messages[i - 1];
			let current = this.state.messages[i];
			let next = this.state.messages[i + 1];
			let isMine = current.author === MY_USER_ID;
			let currentMoment = moment(current.timestamp);
			let prevBySameAuthor = false;
			let nextBySameAuthor = false;
			let startsSequence = true;
			let endsSequence = true;
			let showTimestamp = true;

			if (previous) {
			let previousMoment = moment(previous.timestamp);
			let previousDuration = moment.duration(currentMoment.diff(previousMoment));
			prevBySameAuthor = previous.author === current.author;

			if (prevBySameAuthor && previousDuration.as('hours') < 1) {
			  startsSequence = false;
			}

			if (previousDuration.as('hours') < 1) {
			  showTimestamp = false;
			}
			}

			if (next) {
			let nextMoment = moment(next.timestamp);
			let nextDuration = moment.duration(nextMoment.diff(currentMoment));
			nextBySameAuthor = next.author === current.author;

			if (nextBySameAuthor && nextDuration.as('hours') < 1) {
			  endsSequence = false;
			}
			}

			tempMessages.push(
			<Message
			  key={i}
			  isMine={isMine}
			  startsSequence={startsSequence}
			  endsSequence={endsSequence}
			  showTimestamp={showTimestamp}
			  data={current}
			/>
			);
			i += 1;
		}

		return tempMessages;
	}
	
	render(){
    return(
      <div className="message-list">
        <Toolbar
          title={this.state.author.name}
		  src = {this.state.author.src}
        />

        <div className="message-list-container">{this.renderMessages()}</div>
		
		
		
        <Compose handleSend={this.handleSend}/>
      </div>
    );
	}
	handleSend(msg, auth){
		if (!msg.length)
            return;
		const newId = this.state.messages.length + 1;
		const newMsg = {id : newId, 
						author: auth,
						message: msg,
						timestamp: new Date().getTime()}
		this.setState(prevState => ({
            messages: prevState.messages.concat(newMsg),
        }));

	}
}




export default MessageList;