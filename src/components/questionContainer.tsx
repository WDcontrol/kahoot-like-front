import { useState, useEffect } from "react";
import styled from "styled-components";
import Question from "types/Question";
import Button from "components/button";
import Input from "components/input";
import InputNumber from "./inputNumber";

const StyledQuestionContainer = styled.div``;

export default function QuestionContainer({
  defaultQuestion,
  removeQuestion,
  editQuestion,
  index,
}: {
  defaultQuestion: Question;
  removeQuestion: Function;
  editQuestion: Function;
  index: number;
}) {
  const [curQuest, setCurQuest] = useState<string>(defaultQuestion.question);
  const [answer1, setAnswer1] = useState<string>(defaultQuestion.answers[0]);
  const [answer2, setAnswer2] = useState<string>(defaultQuestion.answers[1]);
  const [answer3, setAnswer3] = useState<string>(defaultQuestion.answers[2]);
  const [answer4, setAnswer4] = useState<string>(defaultQuestion.answers[3]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    const newQuest: Question = {
      question: curQuest,
      answers: [answer1, answer2, answer3, answer4],
      correct: 1,
    };
    editQuestion(index, newQuest);
  }, [curQuest, answer1, answer2, answer3, answer4]);

  return (
    <StyledQuestionContainer>
      <Input label="Question" value={curQuest} setValue={setCurQuest} />
      <Input label={`Answer 1`} value={answer1} setValue={setAnswer1} />
      <Input label={`Answer 2`} value={answer2} setValue={setAnswer2} />
      <Input label={`Answer 3`} value={answer3} setValue={setAnswer3} />
      <Input label={`Answer 4`} value={answer4} setValue={setAnswer4} />
      <InputNumber
        label={"Correct"}
        value={correctAnswer}
        setValue={setCorrectAnswer}
      ></InputNumber>

      <Button onClick={removeQuestion}>Remove</Button>
    </StyledQuestionContainer>
  );
}
