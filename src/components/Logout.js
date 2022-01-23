import React from "react";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import { uiConfig } from "../authProvider";
import firebase from "../Firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

const Logout = (props) => {

  return (
    <div>
    <Header />   
      <Container fluid className="text-white p-5" data-testid="logout">
        <Row>
            <Col>
            <h4 className="text-center">You have been logged out!</h4>
            <Link to="/"><h5 className="text-center">Return to home</h5></Link>
            <h6 className="text-center">OR</h6>
            <h5 className="text-center">Sign back in below?</h5>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Logout;
