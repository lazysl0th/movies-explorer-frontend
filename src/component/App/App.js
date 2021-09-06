import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header navHiddenClass="header__nav_hidden">
            <Navigation />
          </Header>
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header navHiddenClass="header__nav_hidden">
            <Navigation />
          </Header>
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/signin">
          <Header typeClass="header_type_login-register" navHiddenClass="header__nav_hidden">
            <Navigation hiddenClass="navigation_hidden" />
          </Header>
          <Login  />
        </Route>
        <Route path="/signup">
          <Header typeClass="header_type_login-register" navHiddenClass="header__nav_hidden">
            <Navigation hiddenClass="navigation_hidden" />
          </Header>
          <Register />
        </Route>
        <Route path="/*">
          <PageNotFound />
        </Route>
      </Switch>

      <InfoTooltip />


    </div>
  );
}

export default App;
