import React, { Component } from "react";
import { fetchTrendingDayMovie } from "../services/fetchApi";
import MoviesList from "../components/MoviesList";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await fetchTrendingDayMovie();
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={styles.home}>
        <h1>Trending today</h1>
        <MoviesList movies={movies} history={this.props.history} />
      </div>
    );
  }
}

export default HomePage;
