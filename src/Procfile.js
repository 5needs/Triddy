import React from 'react';
// import logo from './logo.svg';
import './Procfile.css';
import Header from './Components/procfile/header'
import Navbar from './Components/procfile/Navbar'
import Banner from './Components/procfile/Banner'
import About from './Components/procfile/About'
import Project from './Components/procfile/Project'
import Portfolio from './Components/procfile/Portfolio'
import Contact from './Components/procfile/Contact'



function Procfile() {
    return (
        <div className="Procfile">
            <Header />
            <hr />
            <Navbar />
            <br />
            <Banner />
            <br />
            <About />
            <br />
            <hr />
            <h1 className="skillheader">My Products</h1>
            <hr />
            <Project />
            <hr />
            <Portfolio />
            <hr />
            <h1 id="contactnav" className="contact">Contact Information</h1>
            <hr />
            <Contact />

        </div>
    );
}

export default Procfile;
