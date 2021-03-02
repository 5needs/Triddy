import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

export default function AddressForm() {
  const numbers = [{value: "1"},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6},{value: 7}];
  return (
    <React.Fragment>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="Producto" />
          <Typography variant="subtitle1">
            Nombre producto
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary="Precio" />
          <Typography variant="subtitle1">
            $5000
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="place"
            name="place"
            label="Lugar de entrega"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
          id="standard-select-currency"
          select
          label="Dia(s)"
          value="1"
        >
          {numbers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <br/>
        <br/>
      </Grid>
    </React.Fragment>
  );
}