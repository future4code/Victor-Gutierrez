import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../Components/Header/header';
import LandingPage from './Landing/landing';
import Login from './Login/login';
import NotFound from './404/notFound';
import React from 'react';
import SignUp from './SignUp/signup';
import Trips from './Trips/Trips';
import Footer from '../Components/Footer/footer';
import Staff from './Staff/StaffLogin';
import DashBoard from './Staff/DashBoard';
import Subscription from './Subscription/subscription';
import TripManagement from './Staff/TripManagement';
import Create from './Staff/Create';
import TripDetails from './Details/tripdetails';
import {
    RedirectIfAdminLogged,
    RedirectIfClientLogged,
} from './CustomRoute/PrivateRoute/PrivateRoute';
import {
    PrivateClientRoute,
    PrivateAdminRoute,
} from './CustomRoute/PrivateRoute/PrivateRoute';

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
                        <RedirectIfClientLogged
                            exact
                            path="/login"
                            component={Login}
                        />
                        <RedirectIfClientLogged
                            exact
                            path="/signup"
                            component={SignUp}
                        />

                        <PrivateClientRoute
                            exact
                            path="/trips"
                            component={Trips}
                        />
                        <PrivateClientRoute
                            exact
                            path="/application"
                            component={Subscription}
                        />
                        <RedirectIfAdminLogged
                            exact
                            path="/staff"
                            component={Staff}
                        />

                        <PrivateAdminRoute
                            exact
                            path="/staff/dashboard"
                            component={DashBoard}
                        />
                        <PrivateAdminRoute
                            exact
                            path="/tripsmanagement"
                            component={TripManagement}
                        />
                        <PrivateClientRoute
                            exact
                            path="/trips/:id"
                            component={TripDetails}
                        />
                        <PrivateAdminRoute
                            exact
                            path="/create"
                            component={Create}
                        />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer location={location.pathname} />
        </>
    );
}
