import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({ tit, img, desc, genres, url }) {
  return (
    <div className={styles.movieDetail}>
      <div>
        <h1>{tit}</h1>
        <img src={img} alt="" />
        <p>{desc}</p>
        {genres ? (
          <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
        ) : null}
        <a href={`${url}`} target="_blank" rel="noreferrer">View More</a>
      </div>
      <div className={styles.goBack}>
        <Link to={`/`}>Go back</Link>
      </div>
    </div>
  );
}

export default MovieDetail;
