import React from 'react';
import './Compose.css';
import { IoIosSend } from 'react-icons/io';
import IconButton from '@material-ui/core/IconButton';

const MY_USER_ID = 1;

class Compose extends React.Component  {
	constructor(props) {
        super(props);
		this.state = {text: ''};
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}
	render(){
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
		  value={this.state.text}
		  onChange={this.handleTextChange}
        />

        <IconButton className="compose-iconbutton" aria-label="Send" onClick={() => { this.handleSend() }}>
		<IoIosSend />
		</IconButton>
      </div>
    );
	}
	
	handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }
	
	handleSend(){
		this.props.handleSend(this.state.text, MY_USER_ID);
		this.setState({
            text: ""
        });
	}
}

export default Compose;