import React from 'react';
import { Router, Route } from 'react-router';
import MainView from '../components/MainView';
import CreateTodo from '../components/CreateTodo';
import TodoPage from '../components/TodoPage';

import React from "react";
import { Route, withRouter } from "react-router-dom";
import { AnimatedSwitch } from "../services/AnimatedSwitch";

/**
 * The ".page" class is key to animating a full page and not receive bumps while
 * animating pages in/out. It is position: fixed to allow the animation to play
 * without the DOM elements messing up.
 *
 * Try to remove .page to see the effect.
 */

const routes = [
    {
        component: MainView,
        path: "/"
    },
    {
        component: CreateTodo,
        path: "/create"
    },
    {
        component: TodoPage,
        path: "/todo/:id"
    }
];

const Routes = withRouter(({ location }) => {
    return (
        <AnimatedSwitch location={location}>
            {routes.map(route => {
                return (
                    <Route
                        exact
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                );
            })}
        </AnimatedSwitch>
    );
});

export default Routes;