import React, { Component } from 'react';
import Data from '../Data';
import user from '../images/user.png';

class MyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
          "id": 1,
          "name": "David Andres Vargas Leon",
          "university": "Escuela Colombiana de Ingeniería Julio Garavito",
          "img": this.generateImage(user),
          "mail": "david.andres-p@mail.escuelaing.edu.co"
      }]
  }
  }

  generateImage(img) {
    return (
      <div className="photo-profile">
          <img src={img}/>
      </div>
    );
  }

  render() {
    return (
      <Data
      name= {this.state.data[0].name}
      university= {this.state.data[0].university}
      img= {this.state.data[0].img}
      mail= {this.state.data[0].mail}/>
    );
  }
}

export default MyData;
