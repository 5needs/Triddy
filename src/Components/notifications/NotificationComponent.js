import React from 'react';
import './Notifications.css';
import { NotificationsList } from './NotificationsList';

export class NotificationsComponent extends React.Component{

    constructor(props){
        super(props);
        var notif = {
            description: "Soy una Notificacion",
            type: "message"
        }
        this.state = {
            items : [notif,notif]
        }
    }

    render(){
        return (
            <div class="notifications-page" >
                <header class="header">
                    <h1> Notifications </h1>
                </header>
                <NotificationsList notificationList={this.state.items}/>
            </div>
        );
    }

}