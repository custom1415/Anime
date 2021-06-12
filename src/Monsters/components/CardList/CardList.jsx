import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { Container, Error, Msg } from "./CardList.styles";

const CardList = ({ AnimeList, error }) => {
  if (error.show) {
    return (
      <Error>
        <Msg>{error.msg}</Msg>
      </Error>
    );
  }
  return (
    <Container>
      {AnimeList.slice(0, 9).map((anime) => {
        return <Card key={anime.mal_id} {...anime} />;
      })}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  AnimeList: state.Anime.Anime,
});
export default connect(mapStateToProps)(CardList);
