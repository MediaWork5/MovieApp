import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path='/MovieApp/' component={Home} />
                        <Route  path='/movie/:imdbID' component={MovieDetail} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
