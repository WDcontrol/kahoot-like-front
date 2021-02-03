import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { SOCKET_SERVER_URL } from "./config";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: black;
  }
`;

const StyledApp = styled.div`
  color: red;
`;

function App() {
  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);
    socket.on("connect", () => {
      console.log("test");
    });
  }, []);

  return (
    <StyledApp>
      <GlobalStyle />
    </StyledApp>
  );
}

export default App;
