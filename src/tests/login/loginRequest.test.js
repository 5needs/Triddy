import { Login } from '../../Components/login/Login';
import axios from 'axios';
import swal from 'sweetalert';
import { shallow } from 'enzyme/build';

// Mock axios, else you will really request the endpoint
jest.mock('axios');

describe('Login tests', () => {
  describe('login function', () => {

    beforeEach(() => {
      /*
       * Not necessary for the moment, but will be useful
       * to test successful & error response
       */
      axios.post.mockResolvedValue({});
    });

    it('should call endpoint with given email & password', async () => {

      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      const loginComponent = shallow(<Login />);
      loginComponent.setState({ email: 'test@test.com', password: 'password' })
      loginComponent.find('form').simulate('submit', fakeEvent);

      const email = 'test@test.com';
      const password = 'password';
      expect(axios.post).toBeCalledWith(
        'http://ec2-34-203-184-51.compute-1.amazonaws.com:8080/login',
        {
            email: email,
            password: password
        }
      );
    });

    // it('should call endpoint with given email & password 2', async () => {

    //   const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    //   const loginComponent = shallow(<Login />);
    //   loginComponent.setState({ email: 'user1@mail.com', password: 'password1' });
    //   loginComponent.find('form').simulate('submit', fakeEvent);

    //   axios.post.mockImplementation(() => Promise.resolve({ data: {accessToken: "aaaaaa"} }));
    // });

    
  });
});