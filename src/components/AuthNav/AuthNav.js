import { NavLink } from 'react-router-dom';
import classes from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={classes.link}
        activeClassName={classes['active-link']}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={classes.link}
        activeClassName={classes['active-link']}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
