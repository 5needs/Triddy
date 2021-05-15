import { Login } from '../../Components/login/Login';
import { cleanup, render, screen } from '@testing-library/react';

describe("Login", () => {
    afterEach(cleanup)

    it('deberia renderizar el login', () => {
        render(<Login/>);
    });

})