import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsBeingReloggedIn);

  useEffect(() => {
    dispatch(authOperations.relogIn());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <p>Loading...</p>
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <RegisterView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
};

export default App;
