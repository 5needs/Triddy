import { cleanup, render, screen } from '@testing-library/react';
import { FavoritesComponent } from '../../Components/favorites/FavoritesComponent';

describe("Notificaciones", () => {
    afterEach(cleanup);

    it('deberia renderizar el componente', () => {
        render(<FavoritesComponent/>);
    });

});