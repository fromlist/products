import { Link } from "react-router-dom";

function MovieDetail({ tit, img, desc, genres, url }) {
  return (
    <div>
      <div>
        <h1>{tit}</h1>
        <img src={img} alt="" />
        <p>{desc}</p>
        {genres ? (
          <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
        ) : null}
        <Link to={`${url}`}>View More</Link>
      </div>
      <div>
        <Link to={`/`}>Go back</Link>
      </div>
    </div>
  );
}

export default MovieDetail;
