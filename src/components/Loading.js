import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Loading = (props) => {
  return (
    <>
      <Col className="bg-dark text-light p-4 m-5 text-center">
        <Row className="p-5">
          <h3>Loading...</h3>
        </Row>
      </Col>
    </>
  );
};

export default Loading;
