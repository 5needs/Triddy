import React from 'react';
import { FavoriteItem } from './FavoriteItem';
import './favorites.css';

export class FavoriteList extends React.Component{
    render(){
        const favoritesList = this.props.favorites.map((fav, i) => {
            return (
                <FavoriteItem key={i} name={fav.name} description={fav.description} img={fav.img} available={fav.available}/>
            );
        });
        return (
            <div className="favoritesContainer">
                {favoritesList}
            </div>
        );
    }
}