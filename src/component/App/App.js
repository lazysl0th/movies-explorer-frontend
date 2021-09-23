import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { checkToken, register, login, logout, updateProfile, getSavedMovies, deleteSavedMovie, saveMovie } from '../../utils/MainApi'
import { getMovies } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/utils';
import {
  protocolHttps,
  imageURL,
  unknownCountry,
  unknownNameEN,
  unknownURL,
  notFoundErrorText,
  searchErrorMessageText,
  textRegSuccess,
  textUpdateSuccess,
  textFail
} from '../../utils/constants';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({
    loggedIn: false,
  });
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [infoState, setInfoState] = React.useState(false);
  const [messageInfoTooltip, setMessageInfoTooltip] = React.useState('');
  const [allMovies, setAllMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({
    registerForm: '',
    loginForm: '',
    profileForm: '',
    find: '',
    search: '',
    savedSearch: ''
  })

  React.useEffect(() => {
    checkToken()
      .then((userData) => {
        if (Object.keys(userData).length) {
          setCurrentUser({
            ...userData,
            loggedIn: true,
          })
          history.push('/')
        } else {
          setCurrentUser({
            loggedIn: false,
          })
          (<Redirect to='/sign-in' />)
        }
      })
      .catch((err) => console.log(err));
  }, [history])

  React.useEffect(() => {

  }, [history])

  React.useEffect(() => {
    getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies.filter((savedMovies) => savedMovies.owner === currentUser._id));
      })
      .catch((err) => console.log(err))
    const localMovie = JSON.parse(localStorage.getItem('movies'));
    setMovies(
      localMovie
        ? localMovie.map(({image, ...props }) => ({
          image: typeof(image) === 'string'
            ? image
            : protocolHttps + imageURL + image.url,
          ...props,
          }))
        : []
    )
    console.log(localMovie);
  }, [currentUser._id])

  React.useEffect(() => {
    setErrors({
      registerForm: '',
      loginForm: '',
      profileForm: '',
      find: '',
      search: '',
      savedSearch: '',
    })
  }, [])

  function closeInfoTooltip () {
    setIsInfoTooltipOpen(false);
  }

  function submitSignupHandler({ name, email, password }) {
    setErrors((prevValues) => ({
      ...prevValues,
      registerForm: '',
    }))
    if ({ name, email, password }) {
      register({ name, email, password })
        .then((newUser) => {
          if (newUser) {
            setIsInfoTooltipOpen(true);
            setInfoState(true);
            setMessageInfoTooltip(textRegSuccess);
            submitSigninHandler({ email, password });
          } else {
            setIsInfoTooltipOpen(true);
            setMessageInfoTooltip(textFail)
          }
        })
        .catch((err) =>{
          err.then(({ message }) => setErrors((prevValues) => ({
            ...prevValues,
            registerForm: message,
          })))}
        );
    }
  }

  function submitSigninHandler({ email, password }) {
    setErrors((prevValues) => ({
      ...prevValues,
      loginForm: '',
    }))
    if (!email || !password) {
      return
    }
    login({ email, password })
      .then((userData) => {
        if(userData) {
          setCurrentUser({
            ...userData,
            loggedIn: true,
          })
          history.push('/movies')
        }
      })
      .catch((err) =>
        err.then(({ message }) => (
          setErrors((prevValues) => ({
          ...prevValues,
          loginForm: message,
        }))))
      );
  }

  function signOut() {
    logout()
      .then((res) => {
        setCurrentUser({
          ...res,
          loggedIn: false,
        })
        history.push('/')
      })
      .catch((err) => console.log(err))
  }

  function submitUpdateProfileHandler({ email, name }) {
    setErrors((prevValues) => ({
      ...prevValues,
      profileForm: '',
    }))
    updateProfile({ email, name })
      .then((userData) => {
        setIsInfoTooltipOpen(true);
        setInfoState(true);
        setMessageInfoTooltip(textUpdateSuccess);
        setCurrentUser((prevState) => ({
          ...prevState,
          ...userData,
        }))
      })
      .catch((err) =>
        err.then(({ message }) => setErrors((prevValues) => ({
          ...prevValues,
          profileForm: message,
        })))
      );
  }

  function searchMovies({ searchQuery, shorts }) {
    setErrors((prevValues) => ({
      ...prevValues,
      search: '',
      find: '',
    }))
    if (searchQuery === '') {
      return setErrors((prevValues) => ({...prevValues, search: searchErrorMessageText}));
    }
    setIsLoading(true);
    if (allMovies.length === 0) {
      getMovies()
      .then((movies) => {
        const moviesList = movies.map(({id, trailerLink, image, nameRU, duration, ...props }) => ({
          id: id,
          trailer: trailerLink,
          image: protocolHttps + imageURL + image.url,
          nameRU: nameRU,
          duration: duration,
          ...props,
        }));
        setAllMovies(moviesList);
        const filterMoviesList = filterMovies(moviesList, searchQuery, shorts);
        (filterMoviesList.length === 0) && setErrors((prevValues) => ({...prevValues, find: notFoundErrorText}))
        setMovies(filterMoviesList);
        localStorage.setItem('movies', JSON.stringify(filterMoviesList));
        setIsLoading(false);
      })
      .catch((err) =>
        err.then(({ message }) => setErrors((prevValues) => ({
          ...prevValues,
          find: message,
        })))
      );
    } else {
      const filterMoviesList = filterMovies(allMovies, searchQuery, shorts);
      (filterMoviesList.length === 0) && setErrors((prevValues) => ({...prevValues, find: notFoundErrorText}))
      setMovies(filterMoviesList);
      localStorage.setItem('movies', JSON.stringify(filterMoviesList));
      setIsLoading(false);
    }
  }

  function seacrhSavedMovies({ searchQuery, shorts }) {
    setErrors((prevValues) => ({
      ...prevValues,
      savedSearch: '',
      find: '',
    }))
    if (searchQuery === '') {
      setErrors((prevValues) => ({...prevValues, savedSearch: searchErrorMessageText}));
    }
    const filterMoviesList = filterMovies(savedMovies, searchQuery, shorts);
    (filterMoviesList.length === 0) && setErrors((prevValues) => ({...prevValues, find: notFoundErrorText}))
    return filterMoviesList;
  }

  function handlerDeleteMovie(savedMovie) {
    deleteSavedMovie(savedMovie._id)
      .then((deleteMovie) => {
        setSavedMovies((state) => state.filter((sM) => sM._id !== savedMovie._id));
        setMovies((state) => state.map((movie) => movie.id === deleteMovie.movieId ? movie : movie));
      })
      .catch((error) => (console.log(error)));
  }

  function handlerChachgeStatusMovie(movie, isSaved) {
    if (isSaved) {
      movie.country = movie.country || unknownCountry;
      movie.nameEN = movie.nameEN || unknownNameEN;
      movie.trailer = movie.trailer.includes(protocolHttps) ? movie.trailer : protocolHttps + unknownURL;

      const {
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        id,
        nameRU,
        nameEN
      } = movie;

    saveMovie({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail: image,
      movieId: id,
      nameRU,
      nameEN
    })
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
        setMovies((state) => state.map((movie) => movie.id === savedMovie.movieId ? movie : movie));
      })
      .catch((error) => (console.log(error)));
    } else {
      const removableSavedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);

      deleteSavedMovie(removableSavedMovie._id)
        .then((deleteMovie) => {
          setSavedMovies((state) => state.filter((savedMovie) => savedMovie._id !== deleteMovie._id));
          setMovies((state) => state.map((movie) => movie.id === deleteMovie.movieId ? movie : movie));
        })
        .catch((error) => (console.log(error)));
    }
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path="/signin">
            <Header />
            <Login onAuth={submitSigninHandler} error={errors.loginForm} />
          </Route>
          <Route path="/signup">
            <Header />
            <Register onReg={submitSignupHandler} error={errors.registerForm} />
          </Route>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            movies={movies}
            savedMovies={savedMovies}
            errorSearch={errors.search}
            errorFind={errors.find}
            isLoading={isLoading}
            searchMovies={searchMovies}
            handlerChachgeStatusMovie={handlerChachgeStatusMovie}>
          </ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            errorSearch={errors.savedSearch}
            errorFind={errors.find}
            savedMovies={savedMovies}
            seacrhSavedMovies={seacrhSavedMovies}
            handlerDeleteMovie={handlerDeleteMovie}>
          </ProtectedRoute>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            error={errors.profileForm}
            onEdit={submitUpdateProfileHandler}
            onLog={signOut}>
          </ProtectedRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeInfoTooltip} infoState={infoState} message={messageInfoTooltip}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
