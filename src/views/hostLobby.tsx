import useQuery from "hooks/useQuery";
import React from "react";
import styled from "styled-components";

const StyledHostLobby = styled.div``;

export default function HostLobby() {
  const query = useQuery();
  const code = query.get("code");
  return <StyledHostLobby>Host Lobby</StyledHostLobby>;
}
