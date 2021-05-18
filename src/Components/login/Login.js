import React from 'react';
import Container from '@material-ui/core/Container';
import { Button, Grid, Link, TextField, ThemeProvider, Typography } from '@material-ui/core';
import './Login.css';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import swal from 'sweetalert';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#e7710a",
        },
        secondary: {
            main: "#d4ac0d",
        }
    },
    
});

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
            color: theme.palette.primary.main,
        },
      '& .MuiFormLabel-root': {
            color: theme.palette.secondary.main,
        },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.secondary.main,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
      },
    },
  })(TextField);

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = { email:'', password:''};
        this.changeColor("#fff4e7");
        
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.redirect();
    }

    changeColor(code){
        document.body.style.backgroundColor = code;
    }

    handleChange(event){
        this.setState({ [event.target.name] : event.target.value});    
    }

    handleSubmitChange(e) {
        this.login();
        e.preventDefault();

    }

    async login(){
        let string = "http";
        await axios.post(string+'://ec2-34-203-184-51.compute-1.amazonaws.com:8080/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            localStorage.setItem("token",response.data.accessToken);
            /* istanbul ignore next */
            swal({
                title: "Login",
                icon: "success"
            });
            
        })
        .catch(function (error) {
            console.log(error);
            swal({
                title: "Wrong Data",
                icon: "error"
            });
        });

        setTimeout(this.redirect,2000);
    }

    redirect(){
        /* istanbul ignore next */
        if (localStorage.getItem("token")){   
            window.location.href = "/";
        }
    }

    render(){
        return (
            <ThemeProvider theme={theme}>
                <Container className="logincontainer" component="main" maxWidth="xs">
                <img className="loginImage" src="logo.png" alt="logo"/> 
                <div className="loginPaper" >

                    <Typography component="h1" variant="h4" color="primary" >
                        <div className="loginMessage">
                        BIENVENIDO A TRIDDY
                        </div>      
                    </Typography>
                    <form className="loginForm" noValidate onSubmit={this.handleSubmitChange}>
                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleChange} 
                        />
                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleChange} 
                        />
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            id="submitButton"
                        >
                            INGRESAR
                        </Button>
                        <Grid container className="linksGrid">
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                ¿Olvidaste tu contraseña?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"¿No tienes una cuenta?"} <br/> {"Registrate"}
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            </ThemeProvider>
        );
    }
}