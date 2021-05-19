import { cleanup, render, screen } from '@testing-library/react';
import shallow from 'enzyme/build/shallow';
import { FavoriteItem } from '../../Components/favorites/FavoriteItem';
import { FavoriteList } from '../../Components/favorites/FavoriteList';
import { FavoritesComponent } from '../../Components/favorites/FavoritesComponent';

describe("Favoritos", () => {
    afterEach(cleanup);

    it('deberia renderizar el componente', () => {
        render(<FavoritesComponent/>);
    });

    it('deberia renderizar la lista de favoritos', () => {
        let item1 = {
            description: "Una bata de laboratorio",
            name: "bata",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        }

        let item2 = {
            description: "Una bata de laboratorio",
            name: "bata",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        }

        let items = [item1,item2];

        shallow(<FavoriteList favorites={items}/>);
        

    });

    it('deberia renderizar un item de favoritos', () => {
        shallow(<FavoriteItem key={0} name={"test name"} description={"test description"} img={"http://image.com"}/>);
    });
});