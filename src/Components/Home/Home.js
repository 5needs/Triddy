import React, { Component } from 'react';
import MenuSlide from './MenuSlide';
import MiniatureProduct from './MiniatureProduct';
import "./home.css"
import deportes from './images/deportes.png';
import speakers from './images/speakers.jpg'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  generateMini(){
    var info = []
    for (let i = 0; i < 6; i++) {
        info.push(<MiniatureProduct title="Libro TM" price="12.000"/>);
    }
    return info
  }

  render() {
    return (
      <div className="mainContainer">
          <div className="Menuslide">
            <MenuSlide search={true}/>
          </div>
          <div className="carousel">
            <div className="slider">
                <ul>
                    <li><img src={speakers} alt="" /></li>
                    <li><img src={deportes} alt="" /></li>
                    <li><img src={speakers} alt="" /></li>
                    <li><img src={deportes} alt="" /></li>
                </ul>
            </div>
          </div>
          <div className="ContainerExplore">
            <h1>Explore</h1>
            <div className="subContainerExplore">
                {this.generateMini()}
            </div>
          </div>

      </div>
    );
  }
}

export default Home;
