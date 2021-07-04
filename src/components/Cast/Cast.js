import React, { Component } from "react";
import { fetchCastById } from "../../services/fetchApi";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await fetchCastById(movieId);
    this.setState({ ...response.data });
  }
  render() {
    const { cast } = this.state;
    return (
      <div className={styles.cast}>
        {cast.length > 0 ? (
          cast.map(({ cast_id, character, name, profile_path }) => (
            <li key={cast_id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              )}
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    );
  }
}

export default Cast;
