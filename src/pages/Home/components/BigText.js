import React from "react";
import { ReactDOM} from "react";
import '../src/css/bigtext.css';
import { Container,Row,Col } from "react-bootstrap";

class BigText extends React.Component {
    render() {
        return (
        <div className="bigtext">
            <Container style={{textAlign:'center', marginTop:'15%'}}>
                <Row>
                    <Col>
                    <h1 style={{fontSize:'90px',fontFamily:'Open Sans'}}>St John<br /><span style={{color:'#BAB866'}}>Evangelist</span> Church</h1>
                    <h2>Where <span style={{color:"#BAB866"}}>God's</span> Love is Shared</h2>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default BigText;