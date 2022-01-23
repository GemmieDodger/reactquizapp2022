import React, { useState } from "react";
import firebase from "../Firebase";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const AddQuestion = (props) => {
  // state for add new quiz question
  const [newQuestion, setNewQuestion] = useState({
    questionText: "",
    answerOptions: [
      { answerText: "", isCorrect: "" },
      { answerText: "", isCorrect: "" },
      { answerText: "", isCorrect: "" },
    ],
    code: "",
    timestamp: 0,
  });

  const col = firebase
    .firestore()
    .collection("quizzes")
    .doc(props.id)
    .collection("questions");

  const onChange = (e) => {
    const name = e.target.name;
    if (name.includes("answerText")) {
      const ref = parseInt(name.match(/\d+/)[0]);
      newQuestion.answerOptions[ref].answerText = e.target.value;
      setNewQuestion(newQuestion);
    } else if (name.includes("isCorrect")) {
      const ref = parseInt(name.match(/\d+/)[0]);
      newQuestion.answerOptions[ref].isCorrect = e.target.value;
      setNewQuestion(newQuestion);
    } else {
      newQuestion[name] = e.target.value;
      setNewQuestion(newQuestion);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().getTime();
    const { questionText, answerOptions, code } = newQuestion;
    console.log(col);
    col
      .add({
        questionText,
        answerOptions,
        code,
        timestamp,
      })
      .then((docRef) => {
        setNewQuestion({
          questionText: "",
          answerOptions: [
            { answerText: "", isCorrect: "" },
            { answerText: "", isCorrect: "" },
            { answerText: "", isCorrect: "" },
          ],
          code: "",
          timestamp: 0,
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const { answerOptions, code, questionText } = newQuestion;

  return (
    <Form className="bg-dark text-light p-4 m-5" onSubmit={onSubmit}>
      <Row>
        <Col>
          <div className="mb-1">
            <h2>ADD NEW QUESTION</h2>
          </div>
          <Form.Group className="mb-3" controlId="questionText">
            <Form.Label>What question would you like to ask?</Form.Label>
            <Form.Control
              as="textarea"
              id="addQuestion"
              rows={2}
              placeholder="Ask question here"
              name="questionText"
              defaultValue={questionText}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="code">
            <Form.Label>
              Would you like to provide some code for this question?{" "}
            </Form.Label>
            <Row>
              <Form.Text className="text-muted">
                Write code in text, with no indents or formatting. JavaScript is
                formatted on display.
              </Form.Text>
            </Row>
            <Form.Control
              as="textarea"
              id="addQuestionCode"
              rows={3}
              placeholder="if (a < b) { console.log('Yeah!') }"
              name="code"
              defaultValue={code}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col className="mt-5">
          <Stack gap={3} className="m-auto">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="answerOption0">
                      <Form.Label>Please suggest option 1?</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="addQuestionAnswer1"
                        rows={1}
                        placeholder="Option 1"
                        name="answerOptions[0].answerText"
                        defaultValue={answerOptions[0].answerText}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Label>Option 1 is</Form.Label>
                    <Form.Select
                      aria-label="The answer is correct or incorrect"
                      name="answerOptions[0].isCorrect"
                      onChange={onChange}
                    >
                      <option value="false">Incorrect</option>
                      <option value="true">Correct</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="answerOption1">
                      <Form.Label>Please suggest option 2?</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="addQuestionAnswer2"
                        rows={1}
                        placeholder="Option 2"
                        name="answerOptions[1].answerText"
                        defaultValue={answerOptions[1].answerText}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Label>Option 2 is</Form.Label>
                    <Form.Select
                      aria-label="The answer is correct or incorrect"
                      name="answerOptions[1].isCorrect"
                      onChange={onChange}
                    >
                      <option value="false">Incorrect</option>
                      <option value="true">Correct</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="answerOption2">
                      <Form.Label>Please suggest option 3?</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="addQuestionAnswer3"
                        rows={1}
                        placeholder="Option 3"
                        name="answerOptions[2].answerText"
                        defaultValue={answerOptions[2].answerText}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Label>Option 3 is</Form.Label>
                    <Form.Select
                      aria-label="The answer is correct or incorrect"
                      name="answerOptions[2].isCorrect"
                      onChange={onChange}
                      id="addQuestionBoolean"
                    >
                      <option value="false">Incorrect</option>
                      <option value="true">Correct</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Button variant="primary" className="mt-4" type="submit">
          Add Question
        </Button>
      </Row>
    </Form>
  );
};

export default AddQuestion;
