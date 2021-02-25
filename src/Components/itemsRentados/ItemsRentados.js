import React from 'react';
import ItemRentado from './../itemRentado/ItemRentado';
import Toolbar from './../toolBar/ToolBar';
import Box from '@material-ui/core/Box';
import { misItems } from './../data/data';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './ItemsRentados.css';

class ItemsRentados extends React.Component {
    constructor(props){
        super(props);
        this.state = {items : misItems, mostar: 'Pendientes'};
        this.handleChangeMostrar = this.handleChangeMostrar.bind(this);
    }

    handleChangeMostrar(e){
        this.setState({
            mostar : e.target.value
        })
    }


    render() {
        let mostrarItems;
        if (this.state.mostar === "Todos"){
            mostrarItems = this.state.items.map((item, i) => {
                return (
                    <ItemRentado key={i} nombre={item.nombre} descripcion={item.descripcion} devuelto={item.devuelto} 
                    src={item.src} fechaEntrega={item.fechaEntrega}/>
                );
            });
        }
        else if (this.state.mostar === "Pendientes"){
            mostrarItems = this.state.items.map((item, i) => {
                if (!item.devuelto){
                return (
                    <ItemRentado key={i} nombre={item.nombre} descripcion={item.descripcion} devuelto={item.devuelto} 
                    src={item.src} fechaEntrega={item.fechaEntrega}/>
                );
                }
            });
        }
        else {
            mostrarItems = this.state.items.map((item, i) => {
                if (item.devuelto){
                return (
                    <ItemRentado key={i} nombre={item.nombre} descripcion={item.descripcion} devuelto={item.devuelto} 
                    src={item.src} fechaEntrega={item.fechaEntrega}/>
                );
                }
            });
        }

        return (
            <div style={{display:'flex', flexDirection:'column'}}>
                <Toolbar title="Mis rentas"/>
                <br/>
                <br/>
                <br/>
                <div className="form">
                    <label htmlFor="status" className="right-margin">
                            Mostrar Items:
                    </label>
                    <Select
                        id="mostrar"
                        type="string"
                        onChange={this.handleChangeMostrar}
                        value={this.state.mostar}>
                        
                        <MenuItem value={"Todos"}>Todos</MenuItem>
                        <MenuItem value={"Pendientes"}>Pendientes</MenuItem>
                        <MenuItem value={"Entregados"}>Entregados</MenuItem>
                    </Select>
                </div>
                <Box >
                     {mostrarItems}
                </Box>
            </div>
        );


    }

}

export default ItemsRentados;
