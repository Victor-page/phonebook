import { Switch, Route } from 'react-router-dom';
import Container from 'components/Container';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import ContactsView from 'views/ContactsView';
import AppBar from 'components/AppBar';


const App = () => (
  <Container>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomeView}></Route>
      <Route path="/register" component={RegisterView}></Route>
      <Route path="/login" component={LoginView}></Route>
      <Route path="/contacts" component={ContactsView}></Route>
    </Switch>
  </Container>
);

export default App;
