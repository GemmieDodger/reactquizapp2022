import React from "react";

const SubHeader = (props) => {


  return (
    <h4 className="text-center" variant="quizAlign">
      You are editing the {props.quizName} quiz
    </h4>
  );
};

export default SubHeader;
