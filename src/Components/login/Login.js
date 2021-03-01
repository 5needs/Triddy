import React from 'react';
import Container from '@material-ui/core/Container';
import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './Login.css';

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
            alert("Login Successful");
            
        }else 
            alert("Not");
    
    }

    render(){
        return (
            <Container className="container" component="main" maxWidth="xs">
                <CssBaseline/>
                <div className="paper" >
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
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
        );
    }
}