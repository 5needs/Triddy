import React from 'react';
import './Notifications.css';
import { NotificationsList } from './NotificationsList';

export class NotificationComponent extends React.Component{

    constructor(props){
        super(props);
        var notif = {
            description: "Soy una Notificacion de mensaje",
            type: "message",
            dueDate: new Date() 
        }
        var notif2 = {
            description: "Soy una Notificacion de devolución",
            type: "return",
            dueDate: new Date() 
        }
        var notif3 = {
            description: "Soy una Notificacion de cancelación",
            type: "cancel",
            dueDate: new Date() 
        }
        var notif4 = {
            description: "Soy una Notificacion de renta",
            type: "rent",
            dueDate: new Date() 
        }
        var notif5 = {
            description: "Soy una Notificacion con tipo desconocido",
            type: "",
            dueDate: new Date() 
        }
        this.state = {
            items : [notif,notif2,notif3,notif4,notif5]
        }
    }

    render(){
        return (
            <div className="notifications-page" >
                <header className="header">
                    <h1> Notifications </h1>
                </header>
                <NotificationsList notificationList={this.state.items}/>
            </div>
        );
    }

}