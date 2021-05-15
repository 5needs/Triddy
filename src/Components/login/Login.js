import React from 'react';
import Container from '@material-ui/core/Container';
import { Button, Grid, Link, TextField, ThemeProvider, Typography } from '@material-ui/core';
import './Login.css';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';

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
        this.changeColor("#fff4e7");
    }

    changeColor(code){
        document.body.style.backgroundColor = code;
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
                    <form className="loginForm" noValidate >
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
                        />
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
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