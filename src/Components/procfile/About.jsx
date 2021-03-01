import React, { Component } from 'react'
import biologo from './images/procfile/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p>Estudiante de 10 semestre de la carrera de Ingeniaría de Sistemas. Siempre cuido mis cosas que no uso, en especial los elementos de laboratorio de cálculo como calculadoras graficadoras.
                    </p>
                
            </section>
        )
    }
}

export default About
