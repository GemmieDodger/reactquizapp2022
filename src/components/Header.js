import React from "react";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FirebaseAuth from "../firebaseAuth";


const Header = (props) => {

  return (
    <>
      <Container fluid className="p-5 bg-dark text-white" data-testid="header">
        <Row>
          <Col xs={8} sm={10}>
            <Link className="text-decoration-none text-secondary" to="/"><h1>QUESTIONSHOP</h1></Link>
          </Col>
          <Col xs={4} sm={2}>

              <Link to="/">
                <Button className="bg-secondary text-light">Home</Button>
              </Link>
              {!props.user ? 
              <>
              <Link to="/login">
                <Button className="bg-success text-light" onClick={props.logout}>Login</Button>
              </Link>
              </>
              : 
              <>
              <Link to="/logout">
                <Button className="bg-danger text-light" onClick={props.logout}>Logout</Button>
              </Link>
              </>
              }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Header;
