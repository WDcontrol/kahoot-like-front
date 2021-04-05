import { socket } from "./index";
import history from "../config/history";
import { getScore, time } from './emit';

export function socketEvents({ setValue }: any) {
  socket.on("connect", () => {
    console.log("connected");
  });
  
  // CREATE
  socket.on("gameNamesData", (data: any) => {
    console.log("gameNamesData", data);
  });
  
  // HOST
  socket.on("showGamePin", (data: any) => {
    setValue((state: any) => {
      return { ...state, gamePin: data.pin };
    });
  });
  
  socket.on("updatePlayerLobby", (data: Array<any>) => {
    console.log("updatePlayerLobby")
    setValue((state: any) => {
      return { ...state, userList: data };
    });
  });
  
  socket.on("gameStarted", (id: any) => {
    history.push("/hostGame?id=" + id);
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
    
    setValue((state: any) => ({ 
      ...state, 
      questionOver: true
    }));
    getScore();
  });
  socket.on("GameOver", (data: any) => {
    console.log("GameOver", data);
  });
  socket.on("getTime", (player: any) => {
    console.log("getTime", player);
    // TODO
    //   time({
    //     player: player,
    //     time: time
    // })
    
    
  });
  
  // LOBBY
  socket.on("hostDisconnect", () => {
    console.log("hostDisconnect");
  });
  socket.on("gameStartedPlayer", () => {
    console.log("gameStartedPlayer");
    if(history.location.pathname === "/playerLobby") 
    history.push("/playerGame?id=" + socket.id);
  });
  
  // PLAYER GAME
  socket.on("answerResult", (data:any) => {
    if(data == true){
      setValue((state: any) => {
        return { ...state, 
          correct: true,
        };
      });
    }
  });
  
  socket.on("questionOver", (data: any) => {
    console.log("questionOver");
  });
  
  socket.on("newScore", (data: any) => {
    console.log("newScore", data);
    setValue((state: any) => ({ 
      ...state,
      scoreText: data,
    }));
    
  });
  socket.on("nextQuestionPlayer", () => {
    console.log("nextQuestionPlayer");
  });
  
  socket.on("playerGameData", (data: any) => {
    console.log("playerGameData", data)
    for(var i = 0; i < data.length; i++){
      if(data[i].playerId == socket.id){
        setValue((state: any) => {
          return { ...state, 
            nameText: data[i].name,
            scoreText: data[i].gameData.score };
          });
        }
      }
    });
    
    socket.on("GameOver", () => {
      console.log("GameOver");
    });
    
    // QUIZ CREATOR
    socket.on("startGameFromCreator", (data: any) => {
      console.log("startGameFromCreator");
      history.push(`/hostLobby?id=${data}`);
    });
    
  }
  