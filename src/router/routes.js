import React from 'react';
import { Route, withRouter } from "react-router-dom";
import { AnimatedSwitch } from "../services/AnimatedSwitch";

const MainView = React.lazy(() => import('../components/MainView'));
const CreateTodo = React.lazy(() => import('../components/CreateTodo'));
const TodoPage = React.lazy(() => import('../components/TodoPage'));
const NotFound = React.lazy(() => import('../components/NotFound'))


/**
 * The ".page" class is key to animating a full page and not receive bumps while
 * animating pages in/out. It is position: fixed to allow the animation to play
 * without the DOM elements messing up.
 *
 * Try to remove .page to see the effect.
 */
export const routes = [
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
    },
    {
        component: NotFound,
        path: "*"
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