import React, { Component } from "react";
import { ReactDOM} from "react";
import { Container,Row,Col } from "react-bootstrap";
import './src/css/home.css';
import Landing from './components/landing';
import Event from './components/event';

class Home extends Component{
    render(){
        return (
            <div className="landing-page">
                <Landing />
                <Event />
            </div>
        )
    }
}

export default Home;