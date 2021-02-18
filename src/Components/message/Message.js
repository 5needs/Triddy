import React from 'react';
import moment from 'moment';
import './Message.css';

class Message extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
    return (
      <div className={[
        'message',
        `${this.props.isMine ? 'mine' : ''}`,
        `${this.props.startsSequence ? 'start' : ''}`,
        `${this.props.endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          this.props.showTimestamp &&
            <div className="timestamp">
              { moment(this.props.data.timestamp).format('LLLL') }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={moment(this.props.data.timestamp).format('LLLL')}>
            { this.props.data.message }
          </div>
        </div>
      </div>
    );
	}
}

export default Message;