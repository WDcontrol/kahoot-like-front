import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div``;

export default function Header() {
  return (
    <StyledHeader>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
      </ul>
    </StyledHeader>
  );
}
