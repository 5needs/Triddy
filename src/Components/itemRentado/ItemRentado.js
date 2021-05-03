import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import './ItemRentado.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import moment from "moment";


class ItemRentado extends React.Component{
    constructor(props){
        super(props);
        this.state = {expanded : false,
                    nombre: this.props.nombre,
                    descripcion: this.props.descripcion,
                    devuelto: this.props.devuelto,
                    fechaEntrega : moment().to(this.props.fechaEntrega),
                    src: this.props.src
                    } 
        console.log(this.state.fechaEntrega);
        this.handleExpanded = this.handleExpanded.bind(this);
    }

    handleExpanded(){
        this.setState(prevState => ({
            expanded: !prevState.expanded,
        }));
    }

    render(){
        return (
        <Card style={{borderWidth:2 , borderColor: 'black', marginTop:"1%"}} variant="outlined">
            <div style={{display:'flex'}}>
                <CardMedia
                className="cover"
                image={this.state.src}
                title="Live from space album cover"
                />
            <div className="details">
                <CardContent className="content">
                <Typography component="h5" variant="h5">
                    {this.state.nombre}
                </Typography>
                { !this.state.devuelto ?
                <div>
                <Typography variant="subtitle1" color="textSecondary">
                  Limite de entrega:
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    {this.state.fechaEntrega}
                </Typography>
                </div>
                : <Typography variant="subtitle1" color="textSecondary">
                    Entregado
                </Typography>}
                </CardContent>
            </div>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx("expand", {
                        ["expandOpen"]: this.state.expanded,
                    })}
                    onClick={() => { this.handleExpanded()}}
                    aria-expanded={this.state.expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
         </div>
         <Button style={{marginLeft: '80%', visibility : this.state.devuelto ? 'hidden' : 'visible'  }}  color='primary' variant="contained">
                 Devolver
        </Button>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div >
                    <Typography component="h5" variant="h5">Descripción:</Typography>
                    <br/>
                    <Typography style={{maxWidth: '40%'}} paragraph>
                        {this.state.descripcion}
                    </Typography>
                    </div>
                </CardContent>
         </Collapse>  
         </Card>
    );
    }

}

export default ItemRentado;