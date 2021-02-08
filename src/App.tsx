import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { SOCKET_SERVER_URL } from "./config/env";
import styled, { createGlobalStyle } from "styled-components";
import AppRouter from "./config/router";

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
      <AppRouter />
    </StyledApp>
  );
}

export default App;
