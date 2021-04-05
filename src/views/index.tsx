import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/button";
import Input from "components/input";
import { useHistory } from "react-router-dom";

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20vh;
`;

export default function Index() {
  let history = useHistory();

  const [nickname, setNickname] = useState("");
  const [code, setCode] = useState("");

  const handleCreateQuest = () => {
    history.push("/create");
  };

  const handleJoinQuest = () => {
    if (code === "") {
      alert("Enter code.");
      return;
    }
    if (nickname === "") {
      alert("Enter nickname.");
      return;
    }


    history.push(`/playerLobby?code=${code}&nickname=${nickname}`);
  };

  return (
    <StyledIndex>
      <Button onClick={handleCreateQuest}>New</Button>
      <Input label="nickname" setValue={setNickname} value={nickname} />
      <Input label="code" setValue={setCode} value={code} />
      <Button onClick={handleJoinQuest}>Join</Button>
    </StyledIndex>
  );
}
