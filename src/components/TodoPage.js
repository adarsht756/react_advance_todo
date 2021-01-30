import React, { useState, useEffect } from 'react'
import nprogress from 'react-nprogress';
import api from '../services/api';
import ErrorBoundary from './ErrorBoundary';

const TodoPage = (props) => {
    const { match, preload } = props
    //const location = useLocation().state;
    const [todo, setTodo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        console.log("TodoPage renderd")
        nprogress.configure({
            showSpinner: false
        })
        // if (!preload || !match) {
        if (!preload || typeof match !== "undefined") {
            nprogress.start()

            api.getEvent(match.params.id)
                .then(res => {
                    setTodo(res.data)
                    nprogress.done()
                    setIsLoading(false)
                })
                .catch(e => {
                    // console.log(e)
                    setIsLoading(false)
                    nprogress.done()
                    throw new Error(e)
                })
        }
        else setTodo({})
    }, [])
    return (
        <ErrorBoundary>
            <React.Suspense fallback={<div>Fuccccc</div>}>
                {isLoading ? "" :
                    <div className="page">
                        <div className="w-7/12 mx-auto border shadow hover:shadow-xl transition-all duration-500 my-8 px-10 py-6 text-xl">
                            <span>@{todo.time ? todo.time : ""} </span>
                            <span className="text-gray-500">On {todo.date}</span> <br />
                            <span className="font-bold text-xl">{todo.title}</span>
                            <br />
                            <span>attendees {todo.attendees ? todo.attendees.length : 0}</span>
                        </div>
                    </div>}
            </React.Suspense>
        </ErrorBoundary>
    )
}

export default TodoPage
