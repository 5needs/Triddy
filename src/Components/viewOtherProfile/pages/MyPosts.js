import React from 'react'
import proBata from '../images/proBata.png'
import libro from '../images/libro.png'
import ProductList from "../ProductList";



class MyPosts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "title": "Bata blanca para laboratorio",
                "price": "14.000",
                "img": this.generateImage(proBata),
                "leftColor": "#E0E0E0",
                "rightColor": "#FF8000"
            },{
                "id": 2,
                "title": "Libro de quimica",
                "price": "14.000",
                "img": this.generateImage(libro),
                "leftColor": "#E0E0E0",
                "rightColor": "#FF8000"
            }]
        }
    }
    
    generateImage(img) {
        return (
            <div className="col-6">
                <img src={img} className="float-right" alt={img}/>
            </div>
        );
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