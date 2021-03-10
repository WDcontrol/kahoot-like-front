import React, { useEffect } from "react";
import { SocketProvider } from "./context/Socket";
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
  return (
    <SocketProvider>
      <StyledApp>
        <GlobalStyle />
        <AppRouter />
      </StyledApp>
    </SocketProvider>
  );
}

export default App;
