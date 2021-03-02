import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './images/logo.png';
import './styles/registration.css'
class registration extends Component {
  
  constructor(props) {
    super(props);
    this.state = {name: '', lastName: '', email: '', user: '', password: '', rePasword: ''};
    this.handleName = this.handleName.bind(this);
    this.handleSubmitSingUp = this.handleSubmitSingUp.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.hanldlePassword = this.hanldlePassword.bind(this);
    this.handleRepassword = this.handleRepassword.bind(this);
  }

  handleSubmitSingUp(){
    if((this.state.password !== this.state.rePasword) && (this.state.password !=='' && this.state.rePasword!=='')){
        alert("Password and Repassword must be the same")
    }else if(this.state.password ==='' || this.state.name ===''|| this.state.rePasword ===''|| this.state.lastName ===''|| this.state.email ===''|| this.state.user ===''){
      alert("All inputs are required")
    }else{
        alert("Registration successful account")
    }
  }

  handleName(event){
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value});
  }

  handleLastName(event){
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value});
  }

  handleEmail(event){
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value});
  }

  handleUser(event){
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value}); 
  }

  hanldlePassword(event){
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value});
  }

  handleRepassword(event){
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value});
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
                    <input type="text" name="name" required="" placeholder="Name" onChange={this.handleName}/>
                    <input type="text" name="lastName" required="" placeholder="Last Name" onChange={this.handleLastName}/>
                    <br/>
                    <input type="email" name="email" required="" placeholder="Email" onChange={this.handleEmail}/>
                    <br/>
                    <input type="text" name="user" required="" placeholder="User name" onChange={this.handleUser}/>
                    <br/>
                    <label>
                    <input type="text" name="password" required="" placeholder="Password" onChange={this.hanldlePassword}/>
                    </label>
                    <br/>
                    <input type="text" name="rePasword" required="" placeholder="Re-password" onChange={this.handleRepassword}/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={this.handleSubmitSingUp}>
                        Sign up
                    </Button>
                  </form>
                </div>
            </div> 
        </div>
    );
  }
}

export default registration;
