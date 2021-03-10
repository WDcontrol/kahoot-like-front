import React from "react";
import history from "./history";
import { Router, Route } from "react-router-dom";
import Layout from "components/layout";
import Index from "views/index";
import HostGame from "views/hostGame";
import HostLobby from "../views/hostLobby";
import PlayerGame from "../views/playerGame";
import PlayerLobby from "../views/playerLobby";
import Create from "../views/create";

export default function AppRouter() {
  return (
    <Router history={history}>
      <Layout>
        <>
          <Route path="/" exact component={Index}></Route>
          <Route path="/hostGame" component={HostGame}></Route>
          <Route path="/hostLobby" component={HostLobby}></Route>
          <Route path="/playerGame" component={PlayerGame}></Route>
          <Route path="/playerLobby" component={PlayerLobby}></Route>
          <Route path="/create" component={Create}></Route>
        </>
      </Layout>
    </Router>
  );
}
