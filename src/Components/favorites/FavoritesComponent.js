import React from 'react';
import { FavoriteList } from './FavoriteList';
import './favorites.css';
import { get } from '../apiaxios'

export class FavoritesComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            items : [],
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
        
        for (let i of ids) {
            this.addProduct(i)
        }
          
    }

    /* istanbul ignore next */
    async addProduct(id){
        let path = "/api/products/id/" + id;
        let product = null;
        await get(this.state.urlproducts,path)
        .then(function (response) {
            product = response;
        })
        .catch(function (error) {
            console.log(error);
        });

        let item = {
            description: product.description,
            name: product.name,
            img : this.state.urlusers + "/photos/" + product.pictures[0],
            available: product.available
        }
        
        this.addItem(item);
    }

    /* istanbul ignore next */
    addItem(item){
        let itms = this.state.items;
        itms.push(item);
        this.setState({items : itms});
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