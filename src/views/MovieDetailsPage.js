import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { fetchMovie } from "../services/fetchApi";
import Reviews from "../components/Reviews/Reviews";
import Cast from "../components/Cast";
import styles from "./MovieDetailsPage.module.css";

class MoviesDetailsPage extends Component {
  state = {
    genres: [],
    overview: null,
    title: null,
    poster_path: null,
    vote_average: null,
    original_name: null,
  };

  async componentDidMount() {
    if (this.props.location.state?.id !== undefined) {
      const { movieId } = this.props.match.params;
      const response = await fetchMovie(movieId);
      this.setState({
        ...response.data,
        poster_path: `https://image.tmdb.org/t/p/w500/${response.data.poster_path}`,
      });
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from, {
      query: this.props.location.state.query,
    });
  };

  render() {
    const {
      title,
      genres,
      overview,
      poster_path,
      vote_average,
      original_name,
    } = this.state;
    return (
      <div>
        <button
          className={styles.btn}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <h1>
          This is full informazion about Movies "{title ? title : original_name}
          "
        </h1>
        <div className={styles.card}>
          <img src={poster_path} alt="Poster" />
        </div>
        <div className={styles.description}>
          <h2>Overview:</h2>
          <p className={styles.p}>{overview}</p>
          <h2>User Score: {vote_average * 10}% </h2>
          <ul>
            <h2>Genres</h2>
            {genres.map((elem) => (
              <li className={styles.li} key={elem.id}>
                {elem.name}
              </li>
            ))}
          </ul>
        </div>
        <section>
          <h2>Additional information</h2>
          <ul>
            <li className={styles.li}>
              <NavLink
                exact
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: this.props.location.state,
                }}
                activeClassName="NavLink--active"
              >
                Cast
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                exact
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: this.props.location.state,
                }}
                activeClassName="NavLink--active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </section>
        <Route exact path={`${this.props.match.path}/cast`} component={Cast} />
        <Route
          exact
          path={`${this.props.match.path}/reviews`}
          component={Reviews}
        />
      </div>
    );
  }
}

export default MoviesDetailsPage;
