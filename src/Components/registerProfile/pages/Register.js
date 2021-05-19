import React, { Component } from 'react';
import Discount from '../Discount';
import MenuSlide from '../MenuSlide';
import Registration from '../Registration';
import '../styles/registration.css'

class Register extends Component {
 
  render() {
    return (
      <div>
          <MenuSlide/>
          <Discount number="2000" type="First time"/>
          <div className="register">
            <Registration/>
          </div>
          <div className="underheader"/>
      </div>
    );
  }
}

export default Register;
