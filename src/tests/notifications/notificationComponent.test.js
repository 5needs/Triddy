import { cleanup, render, screen } from '@testing-library/react';
import shallow from 'enzyme/build/shallow';
import { NotificationComponent } from '../../Components/notifications/NotificationComponent';

describe("Login", () => {
    afterEach(cleanup);

    it('deberia renderizar el login', () => {
        render(<NotificationComponent/>);
    });

});