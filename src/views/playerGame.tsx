import useQuery from "hooks/useQuery";
import React from "react";
import styled from "styled-components";

const StyledPlayerGame = styled.div``;

export default function PlayerGame() {
  const query = useQuery();
  const code = query.get("code");
  return <StyledPlayerGame>Player Game</StyledPlayerGame>;
}
