import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

export class Review extends React.Component {
  render() {
    const products = [
      { name: 'Nombre producto', desc: 'precio por dia', price: localStorage.getItem('price') },
      { name: 'Dia(s)', desc: '', price: localStorage.getItem('days') },
      { name: 'Lugar de entrega', desc: '', price: localStorage.getItem('lugar') },
    ];
    
    const useStyles = makeStyles((theme) => ({
      listItem: {
        padding: theme.spacing(1, 0),
      },
      total: {
        fontWeight: 700,
      },
      title: {
        marginTop: theme.spacing(2),
      },
    }));
    const classes = useStyles;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Resumen del pedido
        </Typography>
        <List disablePadding>
          {products.map((product) => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              {localStorage.getItem('total')}
            </Typography>
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
export default Review;