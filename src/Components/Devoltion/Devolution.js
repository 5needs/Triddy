import React, { Component } from 'react';
import MenuSlide from './MenuSlide';
import deportes from './images/deportes.png';
import './Devolution.css';
class Devolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="devContainerMain">
          <div>
            <MenuSlide/>
          </div>
          <div className="subContainerProducts">
                <div className="productContainer">
                    <div className="mainImge">
                        <img src={deportes} alt="" />
                    </div>
                    <div className="textcontainer">
                        <nav>
                            <li>Balones</li>
                            <li>Precio: $14.000</li>
                        </nav>
                    </div>
                    <div className="ContainerButtons">
                        <div>
                        </div>
                        <div>
                            <button className="claimsButton">Quejas</button>
                            <button className="Devbutton">Devolver</button>
                        </div>
                    </div>
                </div>
          </div>
      </div>
    );
  }
}

export default Devolution;
