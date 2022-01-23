import React from "react";

import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ErrorMessage = (props) => {
  let statement = "";
  switch (props.type) {
    case "questions":
      statement = "There appear to be no questions set for this quiz.";
      break;
    case "quiz":
      statement = "There seems to have been an error with this quiz.";
      break;
    case "quizzes":
      statement = "There appear to be no quizzes.";
      break;
    default:
      statement = "There has been an error";
  }

  return (
    <>
      <Col className="bg-dark text-light p-4 m-5 text-center">
        <Row className="p-5">
          <h3>{statement}</h3>
          <h6>{props.e}</h6>
        </Row>
        <Row>
          <Link to="/">
            <h4>Return to home</h4>
          </Link>
        </Row>
        <Row>
          <h6>or</h6>
        </Row>
        <Row className="mb-5">
          <Link to={`/`}>
            <h4>Edit quiz</h4>
          </Link>
        </Row>
      </Col>
    </>
  );
};

export default ErrorMessage;
