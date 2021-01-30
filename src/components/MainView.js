import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../services/api'
import { userContext } from './userContext'
import Todo from './Todo'
import Loader from './Loader'
import { motion } from 'framer-motion'

const containerVairant = {
    hidden: {
        opacity: 0,
        // x: "100vw"
    },
    visible: {
        opacity: 1,
        // x: 0,
        transition: {
            type: "spring",
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.15,
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: "easeInOut" }
    }
}

const childVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1
    }
}

const MainView = (props) => {

    const consumerVals = useContext(userContext)

    useEffect(() => {
        console.log("Main View rendered")
        console.log(props)
        if (typeof props.preload !== "undefined")
            API.getEvents()
                .then(res => {
                    consumerVals.method({ type: 'FETCH_SUCCESS', payload: res.data })
                })
                .catch(() => consumerVals.method({ type: 'FETCH_SUCCESS' }))
    }, [])
    // if (typeof consumerVals.vals.todoList === "undefined") {
    //     throw new Error("FUckk")
    // }
    return (
        <React.Suspense fallback={<div>Something went wrong</div>}>
            <React.Fragment>
                <div>
                    {
                        consumerVals.vals.loading ?
                            <Loader />
                            :
                            <motion.div
                                variants={containerVairant}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mx-auto py-10" style={{ width: '800px' }}>
                                <span className="mx-auto font-bold text-4xl ml-40 flex items-center">Events for Adarsh</span>
                                {
                                    consumerVals.vals.todoList.map((el) => {
                                        return <motion.div variants={childVariant}>
                                            <Link key={el.id} to={{
                                                pathname: `/todo/${el.id}`, state: {
                                                    event: el,
                                                    passedProp: true
                                                }
                                            }} >
                                                <Todo item={el} />
                                            </Link>
                                        </motion.div>
                                    })
                                }
                            </motion.div>
                    }
                </div>
            </React.Fragment>
        </React.Suspense>
    )
}

export default MainView
