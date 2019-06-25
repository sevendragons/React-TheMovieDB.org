import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import PFiveJS from '../P5/PFiveJS';
import Hook from '../P5/Hook';
import NotFound from '../elements/NotFound/NotFound';


const App = () => {
  return(
    <BrowserRouter>
      <React.Fragment>
        <Header/>
        <Switch>
          <Route path="/"  exact component={Home}></Route>
          <Route path="/:movieId" exact component={Movie}></Route>
          
          <Route activeClassName="active" path="/PFiveJS" exact render={(props) => <PFiveJS/>}></Route>
          <Route activeClassName="active" path="/Hook" exact render={(props) => <Hook/>}></Route>
          <Route path="*" exact component={NotFound}></Route>

        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}
// <Route path="/:movieName" exact component={Movie}></Route>

export default App;
