import { SocketContext } from "context/Socket";
import useQuery from "hooks/useQuery";
import { useEffect, useContext } from "react";
import { startGame, hostJoin } from "sockets/emit";
import UserList from "../components/userList"

import styled from "styled-components";
import history from "../config/history";

const StyledHostLobby = styled.div``;

export default function HostLobby() {
  const query = useQuery();
  const id = query.get("id");
  const { gamePin, userList } = useContext(SocketContext);

  useEffect(() => {
    if(id) {
      console.log("id hostLobby", id)
      hostJoin(id);
    }
  }, []);

  const handleStartGame = () => {
    startGame();
  };
  const handleCancelGame = () => {
    history.push("/");
  };

  return (
    <StyledHostLobby>
      <p>Host Lobby {id}</p>
      <p>GamePin {gamePin}</p>
      <button onClick={handleStartGame}>Start</button>
      <button onClick={handleCancelGame}>Cancel</button>
      <UserList userList={userList}></UserList>
      
    </StyledHostLobby>
  );
}
