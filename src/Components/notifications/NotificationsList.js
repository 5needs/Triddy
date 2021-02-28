import React from 'react';
import { Notification } from './Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faGhost } from '@fortawesome/free-solid-svg-icons'

const types = ["message", "return", "cancel","rent"];

export class NotificationsList extends React.Component{

    constructor(props){
        super(props);

    }

    getIcon(iconName){
        if (!types.includes(iconName)){return(<FontAwesomeIcon icon={faGhost}/>)}

        if (iconName==types[0]){return(<FontAwesomeIcon icon={faCommentDots}/>)}
    }

    render(){
        const notificationList = this.props.notificationList.map((notif, i) => {
            return (
                <Notification key={i} description= {notif.description} icon= {this.getIcon(notif.type)}/>
            );
        });
        return(
            <div>
                {notificationList}
            </div>
        );
    }
}