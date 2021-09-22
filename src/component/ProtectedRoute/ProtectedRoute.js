import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const ProtectedRoute = ({ component: Component, ...props }) => {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <Header />
      <Route>
        {() => currentUser.loggedIn ? <Component {...props} /> : <Redirect to='/signin' /> }
      </Route>
      <Footer />
    </>
  );
};

export default ProtectedRoute;
