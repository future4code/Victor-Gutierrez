import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import PlaylistDetails from './Pages/PlaylistDetails/playlistDetails';
import LostPage from './Pages/404/404';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route
                path="/details/:id"
                render={(props) => <PlaylistDetails {...props} />}
            />
            <Route path="*">
                <LostPage />
            </Route>
        </Switch>
    );
}
