import React, { useEffect, useState } from "react";
import firebase from "../Firebase";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const HomeContent = (props) => {
  const [state, setState] = useState({
    quizzes: [],
  });

  const onCollectionUpdate = (querySnapshot) => {
    const quizzes = [];
    querySnapshot.forEach((doc) => {
      const { quizName } = doc.data();
      quizzes.push({
        key: doc.id,
        doc, // DocumentSnapshot
        quizName,
      });
    });
    setState({ quizzes });
  };

  //check quizzes exists + set state
  useEffect(() => {
    const ref = firebase.firestore().collection("quizzes");
    
    ref.get().then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      }
    });
    const unsubscribe = ref.onSnapshot(onCollectionUpdate);
    return () => unsubscribe();
  }, []);

  return (
    <Container className="text-center" data-testid="homecontent">
      <Row>
        <Col>
          <p className="mt-2 mb-0 text-center text-primary">
            You've made it to the QUESTIONSHOP!
          </p>
          <p className="mb-4 text-center">Next step, knowledge!</p>
        </Col>
      </Row>
      <Row>
        <h1 className="mb-3">Choose your quiz?</h1>
      </Row>
      <Row className="g-4 text-center justify-content-center">
        {props.user && (
          <Link
            className="text-decoration-none text-info"
            to={{ pathname: "/admin" }}
          >
            <Card
              style={{ maxHeight: 100 }}
              className="bg-secondary d-flex  m-0 p-0 text-light xs={1} md={2}"
            >
              <Card.Body className="align-items-center d-flex justify-content-center">
                <h3>Create or edit quiz?</h3>
              </Card.Body>
            </Card>
          </Link>
        )}

        {state.quizzes.map((quiz) => (
          <Col key={quiz.id} xs={12} md={4}>
            <div key={quiz.key} data-label="quiz">
              <Link
                className="text-decoration-none text-"
                to={{ pathname: `/quiz/${quiz.key}/${quiz.quizName}` }}
              >
                <Card
                  style={{ height: 250 }}
                  className="bg-dark d-flex  m-0 p-0 text-light xs={1} md={2}"
                >
                  <Card.Body
                    data-testid="quizCard"
                    className="align-items-center d-flex justify-content-center"
                  >
                    <h3>{quiz.quizName} Quiz</h3>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeContent;
