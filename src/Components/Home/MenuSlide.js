import { IconButton } from '@material-ui/core';
import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LaunchIcon from '@material-ui/icons/Launch';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CommentIcon from '@material-ui/icons/Comment';
import './MenuSlide.css';
import logo from './images/Logo.png';
import { orange, grey} from '@material-ui/core/colors';
import {BrowserRouter as Link, Route, Switch, BrowserRouter, NavLink} from 'react-router-dom';

class MenuSlide extends Component {
  constructor(props) {
    super(props);
    this.search = this.props.search;
    this.state = {};
  }

  isLogged(){
    if(!this.props.isLogged){
      return(
        <div>
          <ul>
            <li><NavLink to="/login"><button>Log in</button></NavLink></li>
            <li><NavLink><button>Registrate</button></NavLink></li>
            
          </ul>
        </div>
      );
    }else{
      return(
        <div>
          <ul>
            <li><button>Salir</button></li>
          </ul>
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
          <div className="searchBar">
              <div>
                <input type="text" name="searchBar" placeholder="Buscar productos o mas"/>
                <IconButton aria-label="search">
                  <SearchIcon style={{color: orange[50]}} ></SearchIcon>
                </IconButton>
              </div>
          </div>
          <div className="iconOption">
            <div>
              <IconButton aria-label="rent" >
                <ShoppingCartIcon style={{color: orange[50]}}></ShoppingCartIcon>
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="rent" >
                <LaunchIcon style={{color: grey[900], background: grey[50]}}></LaunchIcon>
              </IconButton>
            </div>
          </div>
          <div className="iconOption2">
            <div>
              <IconButton aria-label="rent" >
                <NotificationsIcon style={{color: grey[50]}}></NotificationsIcon>
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="rent" >
                <CommentIcon style={{color: grey[50]}}></CommentIcon>
              </IconButton>
            </div>
          </div>
          <div className="profileOptions">
              <ul>
                <li> <a href="">Mi perfil</a></li>
                <li> <a href="">Mis Rentas</a></li>
                <li> <a href="">Notificaciones</a></li>
              </ul>
          </div>
          <div className="sesionOptions">
            {this.isLogged()}
          </div>
          
        </div>
    );
  }
}

export default MenuSlide;
