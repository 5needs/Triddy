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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestRegister = this.requestRegister.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]: value});
  }

  handleSubmit(event) {
    console.log("Click Button Sing Up Values");
    console.log(this.state);
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
    console.log(this.state);
    // async function fetchData() {
    //   const request = await axios.post("fetchUrl");
    //   console.log(request);
    //   return request;
    // }
    // fetchData();
    this.axios = axios.create({
      baseURL: "http://localhost:42000/api/users",
      timeout: 1000,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMkBtYWlsLmNvbSIsInJvbGVzIjoidXNlciIsImlhdCI6MTYyMTM3ODUyMH0.3ty-9wncSbtMVUJYalWGnAxoE-ffwZhund3566qvCQ8",
      },
    });
    this.axios
      .post("", {
        email: this.state.email,
        password: this.state.password,
        fullname: this.state.fullName,
        university: this.state.university,
        career: this.state.career,
        docType: "CC",
        docNum: this.state.document,
      })
      .then((response) => {
        console.log(response.data);
        // localStorage.setItem('token',response.data.accessToken);
        // if(localStorage.getItem('Full name')===null) {
        //     localStorage.setItem('Full name', "name to register");
        // }
        // localStorage.setItem('isLoggedLn', "true")
        // alert("Token: "+localStorage.getItem('token'))
        // window.location.reload(false);
      })
      .catch((error) => {
        // localStorage.setItem('isLoggedLn', "false")
        // alert("Sign up failed or not registration")
        console.log(error);
      });
  }

  render() {

    return (
      <div className="contenedor_usuario">
        <div className="grid-item-sub1">
          <div className="photo">
            <img src={logo} />
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
              <input
                type="text"
                name="fullName"
                required=""
                placeholder="Full Name"
                className="personal__information"
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="career"
                required=""
                placeholder="Career"
                className="personal__information"
                onChange={this.handleChange}
              />
              <div className="critical__information">
                <input
                  type="email"
                  name="email"
                  required=""
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <br />
                <input
                  type="text"
                  name="document"
                  required=""
                  placeholder="Document"
                  onChange={this.handleChange}
                />
                <br />
                <label>
                  <input
                    type="password"
                    name="password"
                    required=""
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </label>
                <br />
              </div>
              <input
                type="text"
                name="university"
                className="semester"
                placeholder="University"
                onChange={this.handleChange}
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                className="button__personal__information"
                onClick={this.handleSubmit}
              >
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
