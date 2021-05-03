import React, { Component } from 'react';
import Card from './CardProduct'

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
            { this.props.products.map((product,i) => {
                return(
                  <div key={i}>
                    <Card
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        leftColor={product.leftColor}
                        rightColor={product.rightColor}
                    />
                  </div>
                )
            })}
        </div>
    );
  }
}

export default ProductList