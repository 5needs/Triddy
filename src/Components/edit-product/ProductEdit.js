import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

export class ProductEdit extends React.Component {
  render() {
    function NumberFormatCustom(props) {
      const { inputRef, onChange, ...other } = props;
      return (
        <NumberFormat
          {...other}
          getInputRef={inputRef}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          isNumericString
          prefix="$"
        />
      );
    }
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Detalles del producto
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="Titulo"
              name="Titulo"
              label="Titulo"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="Description"
              name="Description"
              label="Descriptión"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Costo por dia"
              name="numberformat"
              id="formatted-numberformat-input"
              fullWidth
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="disponibilidad"
              name="disponibilidad"
              id="disponibilidad"
              fullWidth
            />
          </Grid>
          <br/>
          <br/>
          <Grid Grid item xs={12}>
            Imagenes del producto
            <br/><br/>
            <input
                type="file"
                accept="image/*"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default ProductEdit;