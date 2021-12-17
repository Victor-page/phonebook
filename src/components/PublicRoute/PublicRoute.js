import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
  ...otherProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...otherProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
