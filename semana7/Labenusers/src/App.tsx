import React from 'react';
import { GlobalStyle, Header } from './Global/global_styles';
import Homepage from './Pages/Homepage/homepage';
import List from './Pages/List/list';
import Details from './Pages/Detalhes/details';
import NotFound from './Pages/404/notFound';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <GlobalStyle />
            <Router>
                <Header>
                    <Link to="/">
                        <h1>LabenUsers</h1>
                    </Link>

                    <nav>
                        <Link to="/">Cadastro</Link>
                        <Link to="/list">Lista de Usuários</Link>
                    </nav>
                </Header>

                <Switch>
                    <Route path="/" exact>
                        <Homepage />
                    </Route>
                    <Route path="/list">
                        <List />
                    </Route>
                    <Route
                        path="/details/:id"
                        render={(props) => <Details {...props} />}
                    ></Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
