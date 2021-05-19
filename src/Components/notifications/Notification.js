import React from 'react';
import './Notifications.css';
import { format } from 'date-fns';
import { Grid, Typography } from '@material-ui/core';

export class Notification extends React.Component{
    
    render(){
        return(
            <a href={this.props.link}>
                <div className="notification-item">
                    <Grid container alignItems="center" >
                        <Grid item xs={12} sm>
                            <Grid container wrap="nowrap" spacing={1}  alignItems="center">
                                <Grid item >
                                    <div className="notification-icon">
                                        {this.props.icon}
                                    </div>
                                </Grid>
                                <Grid item >
                                    <Typography variant="body1" align="left" >
                                        {this.props.description} 
                                    </Typography>
                                            
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <div className="notification-text-date">
                                {this.formatDate(this.props.dueDate)}
                            </div>
                            
                        </Grid>
                    </Grid>           
                </div>
            </a>
        );
    }

    formatDate(date){
        const dateFormat = "dd/MM/yyyy";
        return format(new Date (date),dateFormat);
    }
}