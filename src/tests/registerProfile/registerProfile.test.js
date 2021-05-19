import { cleanup, render, screen } from '@testing-library/react';
import shallow from 'enzyme/build/shallow';
import Register from '../Components/registerProfile/pages/Register';

describe("Register", () => {
    afterEach(cleanup);

    it('shouldRenderRegister', () => {
        render(<Register/>);
    });

});