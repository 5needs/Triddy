import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import logo from './images/logo.png'
import './styles/registration.css'

class Registration extends Component {
  
  constructor(props) {
    super(props);
    this.state = {name: '', lastName: '', email: '', user: '', password: '', rePasword: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSemester = this.handleChangeSemester.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value});
  }

  handleChangeSemester(event) {
    event.preventDefault();
    const value = event.target.textContent;
    this.setState({semester : value});
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
                    <input type="text" name="name" required="" placeholder="Name" className="personal__information"/>
                    <input type="text" name="lastName" required="" placeholder="Last Name" className="personal__information"/>
                    <div className="critical__information">
                      <input type="email" name="email" required="" placeholder="Email"/>
                      <br/>
                      <input type="text" name="user" required="" placeholder="User name"/>
                      <br/>
                      <label>
                      <input type="text" name="password" required="" placeholder="Password"/>
                      </label>
                      <br/>
                    </div>
                    <input type="number" name="semester" min="1" max="10" className="semester" placeholder="semester"></input>
                    <br/>
                    <Button variant="contained" color="primary" className="button__personal__information">
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


