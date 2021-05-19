import { cleanup, render, screen } from '@testing-library/react';
import { mount } from 'enzyme/build';
import shallow from 'enzyme/build/shallow';
import { NotificationComponent } from '../../Components/notifications/NotificationComponent';

describe("Login", () => {
    afterEach(cleanup);

    it('deberia renderizar', () => {
        render(<NotificationComponent/>);
    });

    it('deberia renderizar esta vaina ', () => {
        let component = mount(<NotificationComponent/>);
        component.find("notification-item")
    });
});