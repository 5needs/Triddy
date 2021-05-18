import { IconButton } from '@material-ui/core';
import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './styles/MenuSlide.css';
import logo from './images/logo2.png';
import { orange } from '@material-ui/core/colors';

class MenuSlide extends Component {
  constructor(props) {
    super(props);
    this.search = this.props.search;
    this.state = {};
  }

  generateSearch(){
    if (this.search) {
      return(
        <div>
          <label>Buscar </label>
          <input type="text" />
        </div>
      );
    }else{
      return(
        <div>
        </div>
      );
    }
  }

  render() {
    return (
        <div className="slideMenu">
                <div className="containerLogo">
                  <img src={logo} alt="" />
                </div>
                <div className="search">
                  {this.generateSearch()}
                </div>
                <div className="buttonSlide">
                  <IconButton aria-label="menu">
                    <MenuIcon  style={{ color: orange[50], fontSize: 40}}/>
                  </IconButton>
                </div>
        </div>
    );
  }
}

export default MenuSlide;