import { socket } from "./index";
export const hostJoin = (id: any) => {
  socket.emit("host-join", id);
};
export const hostJoinGame = (params: any) => {
  socket.emit("host-join-game", params);
};
export const playerJoin = (params: any) => {
  socket.emit("player-join", params);
};
export const playerJoinGame = (code: any) => {
  socket.emit("player-join-game", code);
};
export const playerAnswer = (num: any) => {
  socket.emit("playerAnswer", num);
};
export const getScore = () => {
  socket.emit("getScore");
};
export const time = (data: any) => {
  socket.emit("time", data);
};
export const timeUp = () => {
  socket.emit("timeUp");
};
export const nextQuestion = () => {
  socket.emit("nextQuestion");
};
export const startGame = () => {
  socket.emit("startGame");
};
export const requestDbNames = () => {
  socket.emit("requestDbNames");
};
export const newQuiz = (data: any) => {
  socket.emit("newQuiz", data);
};
