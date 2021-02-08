import React from "react";
import styled from "styled-components";
import Header from "components/header";
import Footer from "components/footer";

const StyledLayout = styled.div``;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
}
