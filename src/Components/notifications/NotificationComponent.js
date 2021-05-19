import axios from 'axios';
import React from 'react';
import './Notifications.css';
import { NotificationsList } from './NotificationsList';

export class NotificationComponent extends React.Component{

    constructor(props){
        super(props);
        let url = "http://ec2-34-203-184-51.compute-1.amazonaws.com:8080";
        this.state = {
            items : [],
            url : url
        }
    }

    componentDidMount() {
        
        this.axios = axios.create({
            baseURL: this.state.url + "/api",
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
        });
        let path = "users/" + localStorage.getItem("user") + "/notifications"
        this.axios.get(path)
        .then(response => response.data)
        .then(data => {
            let notifList = [];
            data.forEach(function (notif) {
                notifList.push(
                    notif
                )  
            });
            this.setState({items: notifList});
        })
        .catch(function (error) {
            console.log(error);
        });
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