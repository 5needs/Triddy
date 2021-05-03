import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { Typography } from '@material-ui/core';
import './FormularioCalificacion.css'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from './../toolBar/ToolBar';

const calificaciones = {
    1: 'Pésimo',
    2: 'Malo',
    3: 'Aceptable',
    4: 'Bueno',
    5: 'Excelente'
  };

const caracteristicas = {
    1: 'No cumple con ninguna',
    2: 'Cumple con pocas',
    3: 'Cumple con algunas',
    4: 'Cumple con casi todas',
    5: 'Cumple con todas'
  };

class FormularioCalificacion extends React.Component {
    constructor(props){
        super(props);
        this.state = {estadoProducto : {numero : 3 , texto : calificaciones[3]},
                    caracteristicasProducto: {numero : 3 , texto : caracteristicas[3]},
                    comentarioProducto: "",
                    calificacionArrendador: {numero : 3 , texto : calificaciones[3]},
                    comentarioArrendador: ""}
        this.handleChangeEstadoProducto = this.handleChangeEstadoProducto.bind(this);
        this.handleChangeCaracteristicasProducto = this.handleChangeCaracteristicasProducto.bind(this);
        this.handleChangeComentarioProducto = this.handleChangeComentarioProducto.bind(this);
        this.handleChangeCalificacionArrendador = this.handleChangeCalificacionArrendador.bind(this);
        this.handleChangeComentarioArrendador = this.handleChangeComentarioArrendador.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEstadoProducto(e){
        this.setState({
            estadoProducto: { numero: parseInt(e.target.value),
            texto : calificaciones[e.target.value]
            }
        });
    }

    handleChangeCaracteristicasProducto(e){
        this.setState({
            caracteristicasProducto: { numero: parseInt(e.target.value),
            texto : caracteristicas[e.target.value]
            }
        });
    }

    handleChangeComentarioProducto(e){
        this.setState({
            comentarioProducto : e.target.value
        });
    }

    handleChangeCalificacionArrendador(e){
        this.setState({
            calificacionArrendador: { numero: parseInt(e.target.value),
            texto : calificaciones[e.target.value]
            }
        });
    }

    handleChangeComentarioArrendador(e){
        this.setState({
            comentarioArrendador : e.target.value
        });
    }

    handleSubmit(){
        const formulario ={ estadoProducto : this.state.estadoProducto,
                            caracteristicasProducto : this.state.caracteristicasProducto,
                            comentarioProducto : this.state.comentarioProducto,
                            calificacionArrendador : this.state.calificacionArrendador,
                            comentarioArrendador : this.state.comentarioArrendador }

        console.log(formulario);
    }


    render(){
        return (
            <div style={{display:'flex', flexDirection:'column'}}>
            <Toolbar title="Califica tu renta"></Toolbar>
            <FormGroup onSubmit={this.handleSubmit} className="form">
                <Typography variant="h5">
                        Producto
                </Typography>
                <Box className="fila">
                    <Typography style={{width:'30%', marginRight:'10%'}}>
                        Estado:
                    </Typography>
                    <Rating 
                        name="estado-producto"
                        value={this.state.estadoProducto.numero}
                        onChange={this.handleChangeEstadoProducto}
                    />
                    <Box ml={2}>{this.state.estadoProducto.texto}</Box>
                </Box>
                <Box className="fila">
                    <Typography style={{width:'30%', marginRight:'10%'}} >
                        Cumple con las características:
                    </Typography>
                    <Rating 
                        name="caracteristicas-producto"
                        value={this.state.caracteristicasProducto.numero}
                        onChange={this.handleChangeCaracteristicasProducto}
                    />
                    <Box ml={2}>{this.state.caracteristicasProducto.texto}</Box>
                </Box>
                <Box className="fila">
                    <Typography style={{width:'30%', marginRight:'10%'}} >
                        Comentarios (opcional):
                    </Typography>
                    <TextField
                        id="comentarios-producto"
                        multiline
                        rows={4}
                        value={this.state.comentarioProducto}
                        onChange={this.handleChangeComentarioProducto}
                        style={{width:'40%'}}
                        variant="outlined"
                    />
                </Box>
                <br/>
                <br/>
                <br/>
                <Typography variant="h5">
                        Arrendador
                </Typography>
                <Box className="fila">
                    <Typography style={{width:'30%', marginRight:'10%'}}>
                        Calificación:
                    </Typography>
                    <Rating 
                        name="calificacion-arrendador"
                        value={this.state.calificacionArrendador.numero}
                        onChange={this.handleChangeCalificacionArrendador}
                    />
                    <Box ml={2}>{this.state.calificacionArrendador.texto}</Box>
                </Box>
                <Box className="fila">
                    <Typography style={{width:'30%', marginRight:'10%'}} >
                        Comentarios (opcional):
                    </Typography>
                    <TextField
                        id="comentarios-arrendador"
                        multiline
                        rows={4}
                        value={this.state.comentarioArrendador}
                        onChange={this.handleChangeComentarioArrendador}
                        style={{width:'40%'}}
                        variant="outlined"
                    />
                </Box>
                <br/>
                <br/>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                    onClick={this.handleSubmit}
                    style={{width:"50%", alignSelf:'center'}}
                >
                    Enviar
                </Button>
            </FormGroup>
            </div>
        )
    }
}

export default FormularioCalificacion;
