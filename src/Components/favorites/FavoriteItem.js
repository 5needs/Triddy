import React from 'react';
import './favorites.css';
import { Button, Grid, Paper, Typography } from '@material-ui/core'

export class FavoriteItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="favoriteItem">
                <Paper >
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <img src={this.props.img} alt="Not Found"/> 
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2} alignItems="flex-start" justify="flex-end">
                                <Grid item xs>           
                                    <p className='favorite-description'>
                                        {this.props.description}
                                    </p>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="subtitle1">
                                        Precio: $ {this.props.price}
                                    </Typography>
                                </Grid>
                                
                            </Grid>
                            <Grid item xs>
                                <Button variant="contained" >
                                    Añadir al carrito
                                </Button>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                   
                </Paper>
                
            </div>
        );
    }
}