import React, { useEffect, useState } from "react";
import firebase from "../Firebase";

import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuth } from "../authProvider";

import Header from "../components/Header";

const Admin = (props) => {
  const { user, loading, logout } = useAuth();
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

  if (loading) {
    return (
      <>
        <Header />
        <div>
          <Link
            className="text-decoration-none"
            to={{pathname: `/admin/create`}}
          >
            <Card
              style={{ height: 250 }}
              className="bg-dark d-flex text-success"
            >
              <Card.Body className="align-items-center d-flex justify-content-center">
                <h3>Create quiz</h3>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <ErrorMessage type="quizzes"  />
      </>
    );
  } else {
    return (
      <>
        <Header user={user} />
        <Container>
          <Row className="g-4 mt-2 text-center justify-content-center">
            <Col xs={12} md={4}>
              <Link
                className="text-decoration-none"
                to={{
                  pathname: `/admin/create`,
                  passedProps: { user: user },
                }}
              >
                <Card
                  style={{ height: 250 }}
                  className="bg-dark d-flex text-success"
                >
                  <Card.Body className="align-items-center d-flex justify-content-center">
                    <h3>Create quiz</h3>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            {state.quizzes.map((quiz) => (
              <Col key={quiz.key} xs={12} md={4}>
                <div data-label="quiz">
                  <Link
                    className="text-decoration-none"
                    to={{
                      pathname: `/admin/edit/quiz/${quiz.key}/${quiz.quizName}`,
                      passedProps: { quizName: quiz.quizName },
                    }}
                  >
                    <Card
                      style={{ height: 250 }}
                      className="bg-dark d-flex text-light"
                    >
                      <Card.Body className="align-items-center d-flex justify-content-center">
                        <h3>Edit {quiz.quizName} quiz</h3>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
};

export default Admin;
