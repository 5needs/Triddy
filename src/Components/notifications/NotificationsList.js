import React from 'react';
import { Notification } from './Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faGhost, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './Notifications.css';

const types = ["message", "return", "cancel","rent"];

export class NotificationsList extends React.Component{

    getIcon(iconName){
        if (iconName===types[0]){return(<FontAwesomeIcon color="#ECA22C" icon={faCommentDots}/>)}
        
        else if (iconName===types[1]){return(<FontAwesomeIcon color="#53B31F" icon={faCheckCircle} />)}

        else if (iconName===types[2]){return(<FontAwesomeIcon color="#CA1111" icon={faTimesCircle} />)}

        else if (iconName===types[3]){return(<FontAwesomeIcon color="#7D8491" icon={faMoneyCheckAlt} />)}

        else {return(<FontAwesomeIcon color="#7D8491" icon={faGhost}/>)}
    }

    render(){
        const notificationList = this.props.notificationList.map((notif, i) => {
            return (
                <Notification key={i} description= {notif.content} icon= {this.getIcon(notif.type)} dueDate= {notif.date} link= {notif.link}/>
            );
        });
        return(
            <div className="notification-container">
                {notificationList}
            </div>
        );
    }
}