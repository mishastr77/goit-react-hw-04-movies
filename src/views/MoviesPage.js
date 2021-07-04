import React, { Component } from "react";
import { fetchMovieWithQuery } from "../services/fetchApi";
import MoveisList from "../components/MoviesList";
import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    query: "",
    films: [],
  };

  async componentDidMount() {
    if (this.props.location.state !== null) {
      const response = await fetchMovieWithQuery(
        this.props.location.state.query
      );
      this.setState({
        films: response.data.results,
        query: this.props.location.state.query,
      });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchMovieWithQuery(this.state.query);
    this.setState({ films: response.data.results });
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query, films } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            className={styles.input}
          />
          <button className={styles.button}>Search</button>
        </form>
        <MoveisList movies={films} history={this.props.history} query={query} />
      </div>
    );
  }
}

export default MoviesPage;
