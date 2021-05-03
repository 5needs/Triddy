import React from 'react';
import './ToolBar.css';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import IconButton from '@material-ui/core/IconButton';
import { history } from './../App'

class ToolBar extends React.Component {
    constructor(props){
		super(props);
		this.handleBack = this.handleBack.bind(this);
	}
	render(){
		if (this.props.src === undefined){
			return (
				<div className="toolbar">
					<h1 className="toolbar-title">{ this.props.title }</h1>
				</div>
			);
		}
		else{
			return (
			  <div className="toolbar">
				<div className="left-items">
					<IconButton className="compose-iconbutton" aria-label="Send" onClick={() => { this.handleBack() }}>
						<IoIosArrowDropleftCircle />
					</IconButton>
				</div>
				<img className="toolbar-photo" src = {this.props.src} alt={this.props.title}></img>
				<h1 className="toolbar-title">{ this.props.title }</h1>
			  </div> 
			);
		}
	}
	
	handleBack(){
		history.push({pathname : "/conversations"});
	}
}

export default ToolBar;