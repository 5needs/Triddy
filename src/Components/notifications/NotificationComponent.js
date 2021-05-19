import React from 'react';
import './Notifications.css';
import { NotificationsList } from './NotificationsList';
import getNotifications from './apiuser';

export class NotificationComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : []
        }
        this.setNotifList = this.setNotifList.bind(this);
    }

    componentDidMount() {
        getNotifications(this.setNotifList);
    }

    setNotifList(notifList){
        this.setState({items: notifList});
    }

    render(){
        return (
            <div className="notifications-page" >
                <header className="header">
                    <h1> Notificaciones </h1>
                </header>
                <NotificationsList notificationList={this.state.items}/>
            </div>
        );
    }

}