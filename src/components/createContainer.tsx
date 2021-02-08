import styled from "styled-components";
import Question from "types/Question";
import QuestionContainer from "components/questionContainer";
import Button from "components/button";

const StyledCreateContainer = styled.div``;

export default function CreateContainer({
  questions,
  setQuestions,
}: {
  questions: Question[];
  setQuestions: Function;
}) {
  const addQuestion = (): void => {
    const emptyQuestion: Question = {
      question: "",
      possibleAnswsers: ["", "", "", ""],
      correctAnswer: "",
    };

    setQuestions([...questions, emptyQuestion]);
  };

  const removeQuestion = (index: number): void => {
    setQuestions(
      questions.filter((_: any, curIndex: any) => {
        console.log(_, index, curIndex);
        return index !== curIndex;
      })
    );
  };

  const editQuestion = (index: number, question: Question): void => {
    let tempQuestions = questions;
    tempQuestions[index] = question;
    setQuestions(tempQuestions);
  };

  const handleSubmit = () => {
    console.log(questions);
  };

  return (
    <StyledCreateContainer>
      Create Container
      {questions.map((question: Question, index: number) => {
        return (
          <QuestionContainer
            key={index}
            index={index}
            defaultQuestion={question}
            removeQuestion={() => removeQuestion(index)}
            editQuestion={editQuestion}
          />
        );
      })}
      <Button onClick={addQuestion}>Add question</Button>
      <Button onClick={handleSubmit}>Create</Button>
    </StyledCreateContainer>
  );
}
