import React, { Component } from 'react';
import MenuSlide from './MenuSlide';
import Productimages from './Productimages';
import ProductInfo from './ProductInfo';
import './showProduct.css'

class ShowProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <div className="containerMain">
         <div>
             <MenuSlide search={true}/>
         </div>
         <div className="containerShowInfo">
            <div>
                <Productimages/>
            </div>
            <div>
                <ProductInfo title="Balones" university="ECI" oferent="alalla" price="12.000" stars={3.5}/>
            </div>
         </div>
         <div className="Description">
             <h2>Descripcion</h2>
             <label>Lorem ipsum dolor sit amet consectetur adipiscing elit, dis cursus augue luctus torquent massa, natoque est tortor pretium porta interdum. Praesent ante habitasse nec lobortis scelerisque duis malesuada, etiam libero urna felis metus torquent pharetra massa, taciti molestie ultrices imperdiet habitant facilisi. Accumsan nostra nibh sociis lobortis cursus turpis, nam penatibus sagittis litora torquent montes, eros curae leo justo primis.
             </label>
         </div>

     </div>
    );
  }
}

export default ShowProduct;
