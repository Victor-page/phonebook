import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={classes.link}
      activeClassName={classes['active-link']}
    >
      Main Page
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={classes.link}
      activeClassName={classes['active-link']}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
