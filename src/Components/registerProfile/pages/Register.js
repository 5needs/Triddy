import React, { Component } from 'react';
import Discount from '../Discount';
import MenuSlide from '../MenuSlide';
import Registration from '../Registration';

class Register extends Component {
 
  render() {
    return (
      <div>
          <MenuSlide/>
          <Discount number="2000" type="First time"/>
          <div className="register">
            <Registration/>
          </div>
      </div>
    );
  }
}

export default Register;
