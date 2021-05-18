import React, { Component } from 'react';
import MenuSlide from './MenuSlide';
import MiniatureProduct from './MiniatureProduct';
import "./home.css"
import imgSlider1 from './images/enero-10-7.png';
import imgSlider2 from './images/fondoMarketing.png';
import imgSlider3 from './images/utiles.jpg';
import imgSlider4 from './images/OIP.jpg';


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
          <div className="slider">
              <ul>
                  <li><img src={imgSlider1} alt="" /></li>
                  <li><img src={imgSlider2} alt="" /></li>
                  <li><img src={imgSlider3} alt="" /></li>
                  <li><img src={imgSlider4} alt="" /></li>
              </ul>
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
