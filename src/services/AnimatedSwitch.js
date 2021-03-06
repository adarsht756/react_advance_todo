import React from 'react';
import { Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'
import '../assets/css/styles.css'
import '../assets/css/nprogress.css'
import '../index.css'
import ErrorBoundary from '../components/ErrorBoundary';

/**
 * This component is used to control the routing animation.
 * It controls what should happen after animation complete (onRest).
 * It differs animation direction based on routePopped props. (Set in router.action.js and available from routerReducer).
 * @param location React router location used as key in Switch
 * @param children All routes (set in Routes.js)
 * @param routePopped Used to manage direction of animation
 * @param rest All other props sent down
 */

export const AnimatedSwitch = ({ history, location, children, ...rest }) => {
    const reverse = location.pathname === "/";

    return (
        <PoseGroup
            flipMove={false}
            preEnterPose={reverse ? "leftSide" : "rightSide"}
            exitPose={reverse ? "rightSide" : "leftSide"}
        >
            <ContextRouteAnimation key={location.pathname} reverse={reverse}>
                <ErrorBoundary>
                    <Switch location={location} {...rest}>
                        {children}
                    </Switch>
                </ErrorBoundary>
            </ContextRouteAnimation>
        </PoseGroup>
    );
};


/**
 * Try to change up the different commented values for varying animatmions
 */
export const ContextRouteAnimation = posed.div({
    enter: {
        x: 0,
        opacity: 1,
        // scale: 1,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 1000
        }
    },
    leftSide: {
        // x: "-100%",
        opacity: 0,
        // scale: 1.5,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400
        }
    },
    rightSide: {
        // x: "100%",
        opacity: 0,
        // scale: 1.5,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400
        }
    },
    leave: {
        x: "-100%",
        position: "absolute",
        zIndex: -1, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400
        }
    }
});