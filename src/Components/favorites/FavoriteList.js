import React from 'react';
import { FavoriteItem } from './FavoriteItem';
import './favorites.css';

export class FavoriteList extends React.Component{
    render(){
        const favoritesList = this.props.favorites.map((fav, i) => {
            return (
                <FavoriteItem key={i} description={fav.description} price={fav.price} img={fav.img} />
            );
        });
        return (
            <div className="favoritesContainer">
                {favoritesList}
            </div>
        );
    }
}