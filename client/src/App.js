import React from 'react';
import Popup from "reactjs-popup";
import { Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Loading from "./components/Loading";

import HomePage from './pages/homepage/homepage.component';
import AboutUs from './pages/about-us/about-us.component';
import Services from './pages/our-services/services.component';
import Contact from './pages/contact/contact.component';
import Payments from './pages/online-payments/payments.component';
import Profile from './pages/profile/Profile';

import PrivateRoute from "./components/PrivateRoute";

import './App.css';

import BurgerIcon from './components/mobilemenu/BurgerIcon';
import MobileMenu from './components/mobilemenu/MobileMenu';

import history from "./utils/history";
import { useAuth0 } from "./react-auth0-spa";

const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
  };

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
    <div>
    <Header />
    <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <MobileMenu close={close} />}
        </Popup>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/nosotros' component={AboutUs} />
    <Route path='/servicios' component={Services} />
    <Route path='/contacto' component={Contact} />
    <PrivateRoute path='/checkout' component={Payments} />
    <PrivateRoute path="/perfil" component={Profile} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
