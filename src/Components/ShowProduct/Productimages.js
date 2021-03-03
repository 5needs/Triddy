import React, { Component } from 'react';
import "./Productimages.css"
import bata from './images/bata.PNG';



class Productimages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="containerImages">
            <div className="subContainer_SelecImages">
                <div>
                    <img src={bata} alt="" />
                </div>
            </div>
            <div className="subContainer_main">
                <img src={bata} alt="" />
            </div>
        </div>
    );
  }
}

export default Productimages;
