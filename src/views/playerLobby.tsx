import React from "react";
import styled from "styled-components";
import useQuery from "../hooks/useQuery";

const StyledPlayerLobby = styled.div``;

export default function PlayerLobby() {
  const query = useQuery();
  const code = query.get("code");
  return <StyledPlayerLobby>Player Lobby</StyledPlayerLobby>;
}
