import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import routes from "./routes";
import AppBar from "./components/AppBar";

const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path={routes.HomePage} component={HomePage} />
          <Route exact path={routes.MoviesPage} component={MoviesPage} />
          <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
          <Redirect to={routes.HomePage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
