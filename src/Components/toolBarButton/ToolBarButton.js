import React from 'react';
import './ToolBarButton.css';

class ToolbarButton extends React.Component {
    constructor(props){
		super(props);
		console.log(this.props.icon);
	}
	
	render(){
    return (
      <i className={`toolbar-button ${this.props.icon}`}> this.props.icon </i>
    );
	}
}

export default ToolbarButton;