import React from "react";
import { socket } from "./index";
import history from "../config/history";

export function socketEvents({ setValue }: any) {
  // CREATE
  socket.on("gameNamesData", (data: any) => {
    console.log("gameNamesData", data);
  });

  // HOST
  socket.on("showGamePin", (data: any) => {
    console.log("showGamePin", data);
  });

  socket.on("updatePlayerLobby", (data: any) => {
    console.log("updatePlayerLobby", data);
  });

  socket.on("gameStarted", (id: any) => {
    console.log("gameStarted", id);
  });

  socket.on("noGameFound", (data: any) => {
    console.log("noGameFound", data);
  });

  // HOST GAME
  socket.on("gameQuestions", (data: any) => {
    console.log("gameQuestions", data);
  });
  socket.on("updatePlayersAnswered", (data: any) => {
    console.log("updatePlayersAnswered", data);
  });
  socket.on("questionOver", (playerData: any, correct: any) => {
    console.log("questionOver", playerData, correct);
  });
  socket.on("GameOver", (data: any) => {
    console.log("GameOver", data);
  });
  socket.on("getTime", (player: any) => {
    console.log("getTime", player);
  });

  // LOBBY
  socket.on("hostDisconnect", () => {
    console.log("hostDisconnect");
  });
  socket.on("gameStartedPlayer", () => {
    console.log("hostDisconnect");
  });

  // PLAYER GAME
  socket.on("answerResult", () => {
    console.log("answerResult");
  });

  socket.on("questionOver", (data: any) => {
    console.log("questionOver");
  });

  socket.on("newScore", (data: any) => {
    console.log("newScore", data);
  });
  socket.on("nextQuestionPlayer", () => {
    console.log("nextQuestionPlayer");
  });

  socket.on("playerGameData", (data: any) => {
    console.log("playerGameData", data);
  });

  socket.on("GameOver", () => {
    console.log("GameOver");
  });

  // QUIZ CREATOR
  socket.on("startGameFromCreator", (data: any) => {
    console.log("startGameFromCreator");
    history.push(`/hostLobby?id=${data}`);
  });

  //   socket.on("gameNamesData", (data: any) => {
  //     setValue((state: any) => {
  //       return { ...state, queueLength };
  //     });
  //   });
}
