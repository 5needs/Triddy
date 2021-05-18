import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import logo from './images/logo.png'
import './styles/registration.css'
import axios from "axios";

class Registration extends Component {
  
  constructor(props) {
    super(props);
    this.state = {fullName: '', career: '', email: '', document: '', password: '', university: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSemester = this.handleChangeSemester.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestRegister = this.requestRegister.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value});
  }

  handleChangeSemester(event) {
    event.preventDefault();
    const value = event.nativeEvent.data;
    this.setState({university : value});
  }

  handleSubmit(event) {
    console.log("Click Button Sing Up Values");
    console.log(
      " fullName: "+this.state.fullName,
      " career: "+this.state.career,
      " email: "+this.state.email,
      " document: "+this.state.document,
      " password: "+this.state.password,
      " university: "+this.state.university);
		event.preventDefault();
		if (this.state.fullName && this.state.career && this.state.email && this.state.document && this.state.password && this.state.university) {
      console.log("Values Registration Submitted");
      this.requestRegister();
		}else{
      alert("All values are required")
      document.getElementById("form").reset();
		  return;
    } 
	}


  requestRegister(){
    console.log("requestRegister Api Backend_Triddy");
    async function fetchData() {
      const request = await axios.post("fetchUrl");
      console.log(request);
      return request;
    }
    fetchData();

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
                  <form id="form">
                    <input type="text" name="fullName" required="" placeholder="Full Name" className="personal__information" onChange={this.handleChange}/>
                    <input type="text" name="career" required="" placeholder="Career" className="personal__information" onChange={this.handleChange}/>
                    <div className="critical__information">
                      <input type="email" name="email" required="" placeholder="Email" onChange={this.handleChange}/>
                      <br/>
                      <input type="text" name="document" required="" placeholder="Document" onChange={this.handleChange}/>
                      <br/>
                      <label>
                      <input type="password" name="password" required="" placeholder="Password" onChange={this.handleChange}/>
                      </label>
                      <br/>
                    </div>
                    <input type="text" name="university" className="semester" placeholder="University" onChange={this.handleChangeSemester}/>
                    <br/>
                    <Button variant="contained" color="primary" className="button__personal__information" onClick={this.handleSubmit}>
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


