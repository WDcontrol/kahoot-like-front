import React, { useState } from "react";
import styled from "styled-components";
import CreateContainer from "components/createContainer";
import Question from "../types/Question";

const StyledCreate = styled.div``;

export default function Create() {
  const defaultQuestion: Question = {
    question: "What's the color's of Henri IV white horse ?",
    answers: ["white", "red", "black", "yellow"],
    correct: 1,
  };

  const [questions, setQuestions] = useState<Question[]>([defaultQuestion]);

  return (
    <StyledCreate>
      <CreateContainer
        questions={questions}
        setQuestions={setQuestions}
      ></CreateContainer>
    </StyledCreate>
  );
}
