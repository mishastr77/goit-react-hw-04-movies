import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.listNav}>
      <li className={styles.ItemNav}>
        <NavLink
          exact
          to={routes.HomePage}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          HomePage
        </NavLink>
      </li>
      <li className={styles.ItemNav}>
        <NavLink
          exact
          to={routes.MoviesPage}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          MoviesPag
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
