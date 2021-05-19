import React from 'react';
import { FavoriteList } from './FavoriteList';
import './favorites.css';

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
            items : [item1,item2]
        }
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