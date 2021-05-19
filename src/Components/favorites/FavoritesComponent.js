import React from 'react';
import { FavoriteList } from './FavoriteList';
import './favorites.css';
import { get } from '../apiaxios'

export class FavoritesComponent extends React.Component{
    
    constructor(props){
        super(props);
        let item1 = {
            description: "Una bata de laboratorio",
            price: 2000,
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        }
        let item2 = {
            description: "Libro de fisica 1",
            price: 5000,
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        }
        this.state = {
            items : [item1,item2],
            urlusers : "http://ec2-34-203-184-51.compute-1.amazonaws.com:8080",
            urlproducts : "http://ec2-54-90-234-221.compute-1.amazonaws.com:35000"
        }
    }

    componentDidMount(){
        this.getFavoriteItems();
    }

    /* istanbul ignore next */
    async getFavoriteItems(){
        var ids = [];
        let path = "/api/users/" + localStorage.getItem("user");
        await get(this.state.urlusers, path)
        .then(function (response) {
            ids = response.favorites;
        })
        .catch(function (error) {
            console.log(error);
        });

        this.addProduct(ids[0]);
    }

    /* istanbul ignore next */
    async addProduct(id){
        let path = "/api/products/id/" + id;
        let product = null;
        await get(this.state.urlproducts,path)
        .then(function (response) {
            product = response;
            console.log(product);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <div className="favoritesComponent" >
                <header className="header">
                    <h1> Mi Lista </h1>
                </header>
                
                <FavoriteList favorites={this.state.items}/>

            </div>
        );

    }

}