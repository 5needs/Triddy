import React from 'react';
import './Notifications.css';
import { NotificationsList } from './NotificationsList';
import {getNotifications, get} from '../apiaxios';

export class NotificationComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : [],
            urlusers : "http://ec2-34-203-184-51.compute-1.amazonaws.com:8080"
        }
    }

    componentDidMount() {
        this.setNotifList();
    }

    /* istanbul ignore next */
    async setNotifList(notifList){
        var notifList = [];
        let path = "/api/users/" + localStorage.getItem("user") + "/notifications";
        await get(this.state.urlusers,path)
        .then(function (response) {
            notifList = response;
        })
        .catch(function (error) {
            console.log(error);
        });

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