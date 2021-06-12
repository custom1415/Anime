import React from "react";
import CardList from "./components/CardList/CardList";
import "./App.css";
import Search from "./components/SearchBox/SearchBox";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import { GetAnime } from "./redux/Anime/Anime.actions";
import { IsLoading } from "./redux/Search/Search.action";
import Spinner from "./components/Loading/Loading";
import Scroll from "./components/ScrollToTop/ScrollToTop";
const App = ({ GetAnime, IsLoading, Loading }) => {
  const [searchTerm, setSearchTerm] = React.useState("Naruto");
  const [error, setError] = React.useState({ show: false, msg: "" });
  const [Anime, setAnime] = React.useState("");
   const Op = React.useCallback(async () => {
    IsLoading(true);
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${
          searchTerm ? searchTerm : "Naruto"                                                                                        
        }`
      );
      const data = await response.json();
      const { results } = data;

      if (results) {
        GetAnime(results);
        IsLoading(false);
        setError({ show: false, msg: "" });
      } else {
        IsLoading(false);
        setError({ show: true, msg: "Couldnt find any Matching Results" });
      }
    } catch (error) {
      IsLoading(false);

      setError({ show: true, msg: "Couldnt find any Matching Results" });
    }
  }, [searchTerm, GetAnime, IsLoading]);
  React.useEffect(() => {
    Op();
  }, [Op, searchTerm, GetAnime]);

  const handleChange = (event) => {
    const { value } = event.target;
    setAnime(value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(Anime);
  };

  return (
    <div>
      <Header />
      <Search
        handleSubmit={HandleSubmit}
        handleChange={handleChange}
        SearchTerm={searchTerm}
      />
      {Loading ? <Spinner /> : <CardList error={error} />}
      <Scroll />
    </div>
  );
};

const MapDispatchToProps = (dispatch) => ({
  GetAnime: (anime) => dispatch(GetAnime(anime)),
  IsLoading: (Bool) => dispatch(IsLoading(Bool)),
});
const MapStateToProps = (state) => ({
  Loading: state.Search.loading,
});
export default connect(MapStateToProps, MapDispatchToProps)(App);
