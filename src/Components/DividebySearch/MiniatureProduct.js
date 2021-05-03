import { Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import herramientas from './images/herramientas.jpg';
import "./MiniatureProduct.css"


class MiniatureProduct extends Component {
  constructor(props) {
    super(props);
    this.image = this.props.image;
    this.title = this.props.title;
    this.price = this.props.price;
    this.state = {};
  }



  render() {
    return (
      <div className="containerMiniProduct">
          <div className="miniTittle"> 
              <Typography variant={this.title.length < 22 ? "h6" : "subtitle2"} align="center">
                {this.title}
              </Typography>
          </div>
          <div className="miniproduct-containerimage">
                <img src={herramientas} />
          </div>
          <div className="miniProduct-subContainer">
              <div>
                  {/* <label>{this.price}</label> */}
                  <Typography variant="body1" align="justify" classes="proof">Precio: ${this.price}</Typography>
              </div>
              <div>
                  <button> <Typography variant="subtitle1">Rentar</Typography> </button>
              </div>
          </div> 
      </div>
    );
  }
}

export default MiniatureProduct;
