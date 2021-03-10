import React, { createContext, useState, useEffect } from "react";
import { initSockets } from "../sockets";
export const SocketContext = createContext({
  queueLength: 0,
  positionInLine: 0,
});

export function SocketProvider(props: any) {
  const [value, setValue] = useState({
    queueLength: 0,
    positionInLine: 0,
  });
  useEffect(() => initSockets({ setValue }), [initSockets]);
  // Note, we are passing setValue ^ to initSockets
  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
}
