import React from 'react';
import './favorites.css';
import { Button, createMuiTheme, Grid, Paper, ThemeProvider, Typography } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#e7710a",
      },
      secondary: {
        main: "#ca1e1e",
      },
    },
  });

export class FavoriteItem extends React.Component{

    render(){
        return (
            <div className="favoriteItem">
                <Paper >
                    <div className="favoriteItemContainer">
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <img src={this.props.img} alt="Not Found"/> 
                            </Grid>

                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} alignItems="flex-start" justify="flex-end">
                                    <Grid item xs>           
                                        <Typography gutterBottom variant="body2">
                                            {this.props.description}
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography gutterBottom variant="subtitle1">
                                            Precio: $ {this.props.price}
                                        </Typography>
                                    </Grid>
                                    
                                </Grid>
                                <Grid item >
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" color="primary">
                                            Añadir 
                                        </Button>
                                    </ThemeProvider>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
                
            </div>
        );
    }
}