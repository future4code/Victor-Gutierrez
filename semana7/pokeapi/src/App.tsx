import React from 'react';
import Homepage from './Pages/Homepage/Homepage';
import GlobalStyle from './Global/global_styles';
import Pokemon from './Pages/Pokemon/pokemon';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route
                        path="/pokemon/:id"
                        render={(props) => <Pokemon {...props} />}
                    ></Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
