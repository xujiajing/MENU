import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Game from './Game/Game';

const Router = (
    <Router history={hashHistory}>
        <Route>
        <IndexRoute component={Game} />
        <Route path="/Game" component={Game} />
        </Route>
    </Router>
);

export default Router;