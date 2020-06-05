import React from 'react';
import GlobalStyle from './Global/global_styles';
import Home from './Pages/Home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlaylistDetails from './Pages/PlaylistDetails/playlistDetails';
import Header from './Components/Header/header';

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route
                        path="/details/:id"
                        render={(props) => <PlaylistDetails {...props} />}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default App;
