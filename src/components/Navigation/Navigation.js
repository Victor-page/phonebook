import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeClassName={classes['active-link']}
      >
        Main Page
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={classes.link}
          activeClassName={classes['active-link']}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
