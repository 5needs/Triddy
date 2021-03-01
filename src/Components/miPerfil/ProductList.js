import React from 'react'
import Card from './CardProduct'


function ProductList(props){
    return(
        <div>
            { props.products.map((product) => {
                return(
                    <Card
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        leftColor={product.leftColor}
                        rightColor={product.rightColor}
                    />
                )
            })}
        </div>
    )
}

export default ProductList