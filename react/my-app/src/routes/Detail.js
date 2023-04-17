import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail() {
  const { movieName } = useParams();
  const [moviesDetail, setMoviesDetail] = useState([]);
  const getMovieList = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movieName}`
      )
    ).json();
    setMoviesDetail(json.data.movie);
  };
  useEffect(() => {
    getMovieList();
  }, []);
  console.log(moviesDetail);
  return (
    <MovieDetail
      tit={moviesDetail.title}
      img={moviesDetail.medium_cover_image}
      desc={moviesDetail.description_full}
      genres={moviesDetail.genres}
      url={moviesDetail.url}
    />
  );
}

export default Detail;
