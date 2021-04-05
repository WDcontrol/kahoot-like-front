import { useEffect } from "react";
import styled from "styled-components";
import useQuery from "hooks/useQuery";
import { hostJoinGame } from "sockets/emit";

const StyledHostGame = styled.div``;

export default function HostGame() {
  const query = useQuery();
  const id = query.get("id");

  useEffect(() => {
    console.log("id",id)
    hostJoinGame({ id });
  }, [id]);

  return (
    <StyledHostGame>
      <p>Host Game {id}</p>
      <p>quest1: </p>
    </StyledHostGame>
  );
}
