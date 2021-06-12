import React from "react";
import {
  Container,
  Heading,
  InputContainer,
  SearchBox,
  Search as SearchButton,
} from "./SearchBox.styles";

const Search = ({ handleChange, handleSubmit, searchTerm }) => {
  return (
    <Container>
      <Heading>Search For Your Favourite Anime</Heading>

      <form onSubmit={handleSubmit}>
        <InputContainer>
          <SearchBox
            type="search"
            name="search"
            onChange={handleChange}
            value={searchTerm}
            placeholder="eg: Naruto"
          />
          <SearchButton type="submit">Search</SearchButton>
        </InputContainer>
      </form>
    </Container>
  );
};
export default Search;
