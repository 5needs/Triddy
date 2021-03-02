import React, { Component } from 'react';
import './styles/Data.css'
import Button from '@material-ui/core/Button';
 
class Data extends Component {
  render() {
    const { name, university, img,  mail} = this.props
    return (
        <div className="contenedor_usuario">
            
            <div className="grid-item-header">
                {img}
            </div>
            <div className="contenedor_usuario-sub1">
                <div className="grid-item-sub2">
                    <div className="information-user">
                        <label>Name: {name}</label>
                        <br/>
                        <label>University: {university}</label>
                        <br/>
                        <label>Contact: {mail}</label>
                    </div>
                </div>
                <div className="grid-item-sub3">
                    <div className="buttons-user">
                        <div className="button">
                            <Button variant="contained" className="button" color="primary">
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
  }
}

export default Data;
