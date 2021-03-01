import React, { Component } from 'react'
import logo from './images/procfile/maxresdefault.jpg';
import cse from './images/procfile/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm Diego Parra </h1>
                    <p id="paragarph1"> Estudiante <br/>
                    Sistemas</p>
                    <a id="logo" href="https://es-la.facebook.com/diego.heidegger" ><img src={cse} width="30" height="30" alt="cselogo"/></a>
                    
            </section>
        )
    }
}

export default Banner


