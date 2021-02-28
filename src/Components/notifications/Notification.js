import React from 'react';
import './Notifications.css';
export class Notification extends React.Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="test">
                {this.props.icon}
                {this.props.description}     
            </div>
        );
    }
}