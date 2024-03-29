import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

export default function Button({
  children,
  onClick,
}: {
  children: string;
  onClick: any;
}) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
