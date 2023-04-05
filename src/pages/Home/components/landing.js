import React, { Component } from "react";
import { ReactDOM } from "react";
import '../src/css/landing.css'
import 'animate.css'

class Landing extends Component{
    render(){
        return (
            <section className="landing">
                <div className="sun">&nbsp;</div>
                <nav>
                <img className="logo" src={require('../src/img/logo.png')} alt="" />
                    <ul className="navigation">
                        <li className="nav-item"><a href="/Home">Home</a></li>
                        <li className="nav-item"><a href="/AboutUs">About Us</a></li>
                        <li className="nav-item"><a href="/Worship">Worship</a></li>
                        <li className="nav-item"><a href="/Mission">Mission</a></li>
                        <li className="nav-item"><a href="/Centre">The Centre</a></li>
                        <li className="nav-item"><a href="/Children">Children</a></li>
                        <li className="nav-item"><a href="/SupportUs">Support Us</a></li>
                        <li className="nav-item"><a href="/Safeguarding">Safeguarding</a></li>
                    </ul>
                </nav>
                <div className="welcome-container">
                    <div className="welcome-content">
                        <h1 className="welcome-title">St John's The Evangelist Church</h1>
                        <h3 className="welcome-subtitle">A Transforming Christian Presence</h3>
                    </div>
                    <hr className="title-line" />
                    <div className="btn">
                        <p className="btn-content">Scroll Down</p>
                    </div>
                </div>
                {/* <div className="church-bg">
                    <img className="tree" src={require('../src/img/tree.png')} />
                    <img className="church-nobg" src={require('../src/img/church-no-bg.png')} />   
                </div> */}
                
            </section>

        )
    }
}

export default Landing;