import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import { authOperations } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.relogIn());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
};

export default App;
