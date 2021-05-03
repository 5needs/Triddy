import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './images/logo.png';
import './styles/registration.css'
class Registration extends Component {
  
  constructor(props) {
    super(props);
    this.state = {name: '', lastName: '', email: '', user: '', password: '', rePasword: ''};
  }

  render() {
    return (
        <div className="contenedor_usuario">
            <div className="grid-item-sub1">
                <div className="photo">
                    <img src={logo}/>
                </div>
                <div className="button-back">
                    <Button variant="contained" color="primary">
                        Back
                    </Button>
                </div>
            </div>
            <div className="grid-item-sub2">
                <div className="information-user">
                  <form>
                    <input type="text" name="name" required="" placeholder="Name"/>
                    <input type="text" name="lastName" required="" placeholder="Last Name"/>
                    <br/>
                    <br/>
                    <input type="email" name="email" required="" placeholder="Email"/>
                    <br/>
                    <input type="text" name="user" required="" placeholder="User name"/>
                    <br/>
                    <label>
                    <input type="text" name="password" required="" placeholder="Password"/>
                    </label>
                    <br/>
                    <input type="text" name="rePasword" required="" placeholder="Re-password"/>
                    <br/>
                    <Button variant="contained" color="primary">
                        Sign up
                    </Button>
                  </form>
                </div>
            </div> 
        </div>
    );
  }
}

export default Registration;
