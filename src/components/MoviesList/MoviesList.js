import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, history, query }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ id, title, original_name }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { id, from: history.location.pathname, query },
            }}
          >
            {title ? title : original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
