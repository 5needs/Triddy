import React, { Component } from 'react'
import pybot from './images/procfile/pybot.png';
import Opencv from './images/procfile/Snapshot.png';
import NightMares from './images/procfile/menu3.png';
import RecorderMaintainer from './images/procfile/de.png';
import WordPress from './images/procfile/blog.png';
import Password from './images/procfile/bute.png';
import biologo from "./images/procfile/biopicimg.jpg";
import comment from "./images/procfile/comentario.jpg";



class Portfolio extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                <h1>My comments</h1>
                <img src={comment} width="180" height="180" alt="abtimg"/>
                <p>Anamaría: Los productos que alquila son de buena calidad.</p>
                <p>Julian: Brinda buena atención.</p>
                <p>Alan: ok.</p>
            </section>
        )
    }
}

export default Portfolio


