import React from "react";
import booksLogo from "../../assets/books-logo.png";
import { Search } from "../Search/search";
import { SubHeader, Wrapper } from "./header.style";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <SubHeader>
        <img src={booksLogo} alt="Logo da página" />

        <h1>DiscoveringBooks ;)</h1>
      </SubHeader>

      <Search />
    </Wrapper>
  );
};
