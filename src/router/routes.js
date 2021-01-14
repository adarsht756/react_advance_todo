import React from 'react';
import { Router, Route } from 'react-router';
import MainView from '../components/MainView';
import CreateTodo from '../components/CreateTodo';
import TodoPage from '../components/TodoPage';

const createRoutes = () => (
    <Router>
        <Route exact path="/" component={MainView} />
        <Route exact path="/create" component={CreateTodo} />
        <Route exact path="/todo" component={TodoPage} />
    </Router>
);

export default createRoutes;