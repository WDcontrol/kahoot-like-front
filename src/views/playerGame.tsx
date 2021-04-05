import useQuery from "hooks/useQuery";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { playerJoinGame } from "sockets/emit";
import { playerAnswer } from '../sockets/emit';

import { SocketContext } from "context/Socket";

const StyledPlayerGame = styled.div``;

export default function PlayerGame() {
  const query = useQuery();
  const id = query.get("id");
  const [playerAnswered, setPlayerAnswered] = useState(false);
  const { nameText, scoreText, questionOver, correct } = useContext(SocketContext);
  
  let message = "";

  if(questionOver && correct)
    message = "Correct"
  else if (questionOver && !correct)
    message = "Incorrect"

  useEffect(() => {
    playerJoinGame(id);
  }, [id])
  
  const answerSubmitted = (num:number) => {
    if(playerAnswered == false){
      setPlayerAnswered(true);
      
      playerAnswer(num)
      //Hiding buttons from user
    }
  }
  
  return <StyledPlayerGame>
    <div id = "stats">
      <h4 id = "nameText">Name: {nameText}</h4>
      <h4 id = "scoreText">Score: {scoreText}</h4>
      <h4 id = "rankText"></h4>
    </div>
    <h2 id = "message">{message}</h2>
    <button onClick={() =>answerSubmitted(1)} id="answer1" ></button>
    <button onClick={() =>answerSubmitted(2)} id="answer2" ></button>
    <br></br>
    <button onClick={() =>answerSubmitted(3)} id="answer3" ></button>
    <button onClick={() =>answerSubmitted(4)} id="answer4" ></button>
  </StyledPlayerGame>;
}
