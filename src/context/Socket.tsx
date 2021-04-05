import { createContext, useState, useEffect } from "react";
import { initSockets } from "../sockets";

const defaultContext = { 
  gamePin: undefined, 
  userList: [],
  nameText: "",
  scoreText:"",
  correct: false,
  questionOver: false,
  currentQuestion: {
    q1: "",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
  },
};

export const SocketContext = createContext(defaultContext);

export function SocketProvider(props: any) {
  const [value, setValue] = useState(defaultContext);
  useEffect(() => initSockets({ setValue }), []);
  // Note, we are passing setValue ^ to initSockets
  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
}
