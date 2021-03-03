import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import bata from './img/bata.png';

export class ProductDelete extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Typography align='left'>
          Ingresa el titulo del producto 'Bata Blanca'
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Titulo"
              name="Titulo"
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12}>
            <img src={bata} alt="bata" />
          </Grid>

          <Typography>
              Ingresa tu contraseña para autenticar tu identidad
        </Typography>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password"
              type="password"
              name="password"
              label="password"
              fullWidth
            />
          </Grid>
          <br/>
          <br/>
        </Grid>
      </React.Fragment>
    );
  }
}
export default ProductDelete;