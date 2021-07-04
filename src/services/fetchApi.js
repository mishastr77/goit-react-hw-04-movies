import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "44d183c66cd67549463b6e352490cb5e";

const fetchMovieWithQuery = (query) => {
  return axios({
    method: "GET",
    url: `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  });
};

const fetchTrendingDayMovie = () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${BASE_URL}/trending/all/day?${searchParams}`);
};

const fetchMovie = (movieId) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
  });
  return axios.get(`${BASE_URL}/movie/${movieId}?${searchParams}`);
};
const fetchCastById = (movieId) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
  });
  return axios.get(`${BASE_URL}/movie/${movieId}/credits?${searchParams}`);
};
const fetchReviewsById = (movieId) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    page: 1,
  });
  return axios.get(`${BASE_URL}/movie/${movieId}/reviews?${searchParams}`);
};

export {
  fetchMovieWithQuery,
  fetchTrendingDayMovie,
  fetchMovie,
  fetchCastById,
  fetchReviewsById,
};
