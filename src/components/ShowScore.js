import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ShowScore = (props) => {
  return (
    <>
      <div className="text-center bg-dark text-light p-4 m-5">
        <Row>
          <p className="text-center">
            You scored {props.score} out of {props.length}
          </p>
        </Row>
        <Row>
          <Link to="/">
            <Button>Go back to Home</Button>
          </Link>
        </Row>
      </div>
      {props.incorrectQuestions.length > 0 && (
      <>
      <Row className="bg-dark text-light p-4 m-5">
      
        <h3>Incorrect answers </h3>
          {props.incorrectQuestions.map((question, index) => (
            <>
              <Row >
                <Row>
                  <Col>
                    <div className="mb-1">
                      <span>Question {question.currentQuestion + 1}</span>
                    </div>
                    <div className="mb-2">{question.questionText}</div>
                  </Col>
                  <Col>
                    <Row>
                      <div>
                        You picked the answer: {question.incorrectAnswerText}
                      </div>
                    </Row>
                    <Row>
                      <div>
                        The correct answer was: {question.correctAnswerText}
                      </div>
                    </Row>
                  </Col>
                </Row>
                <hr /> 
              </Row>
              </>
          ))}
        }
        </Row>
        </> )}
    </>
  );
};

export default ShowScore;
