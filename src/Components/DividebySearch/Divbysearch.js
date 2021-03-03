import React, { Component } from 'react';
import MenuSlide from './MenuSlide';
import MiniatureProduct from './MiniatureProduct';
import './divbysearch.css'

class Divbysearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  generateMini(){
    var info = []
    const temp = [{title:"Herramientas" , price:"14.000"},{title:"Herramientas Fullhd" , price:"15.000"},{title:"Herramientas4K" , price:"10.000"}
    ,{title:"Herra mientas" , price:"10.000"},{title:"Tools" , price:"10.000"},{title:":cTooles" , price:"10.000"}] 
    for (let i = 0; i < temp.length; i++) {
        info.push(<MiniatureProduct title={temp[i].title} price={temp[i].price}/>);
    }
    return info
  }

  render() {
    return (
        <div className="containerSearch">
            <div className="Menuslide">
                <MenuSlide search={true}/>
            </div>
            <div className="ContainerResult">
                <div className="ContainerFilter">
                    <div>
                        <nav>
                            <li><input type="Radio" id="Martillos" value="Martillos"/>
                                <label for="Martillos"> Martillos</label>
                            </li>
                            <li>
                                <input type="Radio" id="Alicates" value="1Alicates"/>
                                <label for="Alicates"> Alicates</label>
                            </li>
                            <li>
                                <input type="Radio" id="Metros" value="Metros"/>
                                <label for="Metros"> Metros</label>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className="subContainerResult">
                    {this.generateMini()}
                </div>
            </div>
        </div>
    );
  }
}

export default Divbysearch;
