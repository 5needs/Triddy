import React from 'react'
import proBata from '../images/proBata.png'
import ProductList from "../ProductList";

function generateImage(img) {
    return (
        <div className="col-6">
            <img src={img} className="float-right" alt={img}/>
        </div>
    );
}

class MyPosts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "title": "Bata blanca para laboratorio",
                "price": "14.000",
                "img": generateImage(proBata),
                "leftColor": "#E0E0E0",
                "rightColor": "#FF8000"
            }]
        }
    }
    
    render(){
        return(
            <div>
                <ProductList
                    products={this.state.data}
                />
            </div>
        )
    }

}

export default MyPosts