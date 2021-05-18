import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PrivateRoute } from '../Components/PrivateRoute';

import localStorage from '../localstorage';

global.localStorage = localStorage;
window.localStorage = global.localStorage;
describe("PrivateRoutes", () => {
    afterEach(cleanup);

    beforeEach(() => localStorage.clear());

    it('is initialized properly', () => expect(localStorage.store).toEqual({}));
  
    it("returns undefined if requested item doesn't exist", () => {
      const foo = localStorage.getItem('foo');
      expect(foo).toBeUndefined();
    });

    it('sets the value of an item', () => {
        localStorage.setItem('foo', 'bar');
        expect(localStorage.store).toEqual({ foo: 'bar' });
    });
    
    it('deberia renderizar', () => {
        render(<BrowserRouter>
            <PrivateRoute path='/'>
                <div> Hola </div>
            </PrivateRoute>
        </BrowserRouter> );
    });

    it('deberia renderizar 2', () => {
        localStorage.setItem('token','fake-token');
        expect(localStorage.getItem('token')).toEqual('fake-token');
        render(<BrowserRouter>
            <Switch>
                <PrivateRoute path='/'>
                    <div> Hola </div>
                </PrivateRoute>
            </Switch>
            
        </BrowserRouter> );

        localStorage.removeItem('token');
    });

});