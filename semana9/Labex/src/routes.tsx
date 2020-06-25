import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './Components/Header/header';
import LandingPage from './Pages/Landing/landing';
import Login from './Pages/Login/login';
import NotFound from './Pages/404/notFound';
import React from 'react';
import SignUp from './Pages/SignUp/signup';
import TripDetails from './Pages/TripDetails/tripdetails';
import Trips from './Pages/Trips/Trips';
import Footer from './Components/Footer/footer';
import Staff from './Pages/Staff/StaffLogin';
import DashBoard from './Pages/Staff/DashBoard';

export default function Routes() {
    const location = useLocation();

    
    return (
        <>
            <Header location={location.pathname} />
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 500, exit: 500 }}
                    classNames={'fade'}
                >
                    <Switch location={location}>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/trips" component={Trips} />
                        <Route
                            exact
                            path="/trip/details/:id"
                            component={TripDetails}
                        />
                        <Route exact path="/staff" component={Staff} />
                        <Route
                            exact
                            path="/staff/dashboard"
                            component={DashBoard}
                        />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer location={location.pathname} />
        </>
    );
}
