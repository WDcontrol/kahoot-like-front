import { useEffect, useContext } from "react";
import styled from "styled-components";
import { SocketContext } from "context/Socket";
import useQuery from "../hooks/useQuery";
import UserList from '../components/userList';
import { playerJoin } from '../sockets/emit';
import { useHistory } from "react-router-dom";


const StyledPlayerLobby = styled.div``;

export default function PlayerLobby() {
  let history = useHistory();
  const query = useQuery();
  const code = query.get("code");
  const nickname = query.get("nickname");
  const { userList } = useContext(SocketContext);

  useEffect(() => {
    if(code)
      playerJoin({ code: parseInt(code), nickname});
  }, [])

  return <StyledPlayerLobby>
    <UserList userList={userList}/>
  </StyledPlayerLobby>;
}
