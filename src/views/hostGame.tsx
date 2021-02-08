import React from "react";
import styled from "styled-components";
import useQuery from "hooks/useQuery";

const StyledHostGame = styled.div``;

export default function HostGame() {
  const query = useQuery();
  const code = query.get("code");

  return <StyledHostGame>Host Game</StyledHostGame>;
}
