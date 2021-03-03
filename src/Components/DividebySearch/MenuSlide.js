import { IconButton } from '@material-ui/core';
import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './MenuSlide.css';
import logo from './images/Logo.png';
import { orange } from '@material-ui/core/colors';

class MenuSlide extends Component {
  constructor(props) {
    super(props);
    this.search = this.props.search;
    this.state = {};
  }

  render() {
    return (
        <div className="slideMenu">
                <div className="containerLogo">
                  <img src={logo} alt="" />
                </div>
                <div className="search">
                <div>
                  <label>Buscar </label>
                  <input type="text" placeholder="Herramientas"/>
                </div>
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
