import { Login } from '../../Components/login/Login';
import { cleanup, render, screen } from '@testing-library/react';
import shallow from 'enzyme/build/shallow';

describe("Login", () => {
    afterEach(cleanup);

    const props = {
        login: () => {},
       };

    it('deberia renderizar el login', () => {
        render(<Login/>);
    });

    it('validar presencia', ()=> {
        const email = 'user1@mail.com';
        const wrapper = shallow(<Login />);
        const eventEmail = {
            target: { name: 'email', value: email }
           };
        wrapper.find('#email').simulate('change',eventEmail);
    });

    it('should fail if no credentials are provided', () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        const loginComponent = shallow(<Login />);
        expect(loginComponent.find('form').length).toBe(1);
        loginComponent.find('form').simulate('submit', fakeEvent);
    });

});