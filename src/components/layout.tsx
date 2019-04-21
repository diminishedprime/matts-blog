import React from "react";
import { StyledLink } from "./common";

import styled from "styled-components";
import "./layout.css";

const Wrapper = styled.div`
  max-width: 50em;
  margin: 0 auto;
`;

const Footer = () => <footer>© {new Date().getFullYear()}</footer>;

const Header = ({ title }) => (
  <header>
    <h1>
      <StyledLink to={`/`}>{title}</StyledLink>
    </h1>
  </header>
);

export default ({ title, children }) => (
  <Wrapper>
    <Header title={title} />
    <main>{children}</main>
    <Footer />
  </Wrapper>
);
