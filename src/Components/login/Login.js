import React from 'react';
import Container from '@material-ui/core/Container';
import { Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography } from '@material-ui/core';
import './Login.css';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e7710a",
    },
    secondary: {
      main: "#ca1e1e",
    },
  },
});
localStorage.setItem('username', 'test@somemail.com');
localStorage.setItem('password', '1234567');

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
    }

    handleSubmitChange(e) {
        let username = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
            localStorage.setItem('isLoggedIn', true);
        }    
    }

    render(){
        return (
            <ThemeProvider theme={theme}>
                <Container className="container" component="main" maxWidth="xs">
                <CssBaseline/>
                <div className="paper" >
                    <Typography component="h1" variant="h4" >
                        Sign in
                    </Typography>
                    <form className="form" noValidate onSubmit={this.handleSubmitChange}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >
                            Sign In
                        </Button>
                        <Grid container className="linksGrid">
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
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