import { Route, Switch, useLocation } from 'react-router-dom';

import Header from './Components/Header/header';
import LandingPage from './Pages/Landing/landing';
import Login from './Pages/Login/login';
import NotFound from './Pages/404/notFound';
import React from 'react';
import SignUp from './Pages/SignUp/signup';
import TripDetails from './Pages/TripDetails/tripdetails';
import Trips from './Pages/Trips/Trips';

export default function Routes() {
    const location = useLocation();
    return (
        <>
            <Header location={location.pathname} />
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/trips" component={Trips} />
                <Route path="/trip/details/:id" component={TripDetails} />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    );
}
