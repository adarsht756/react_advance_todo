import React, { useState, useEffect } from 'react'
//import { useLocation } from 'react-router-dom'
import api from '../services/api';

const TodoPage = ({ match: { params: { id } } }) => {

    //const location = useLocation().state;
    const [todo, setTodo] = useState({})
    useEffect(() => {
        api.getEvent(id)
            .then(res => setTodo(res.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div>
            <div className="w-7/12 mx-auto border shadow hover:shadow-xl transition-all duration-500 my-8 px-10 py-6 text-xl">
                <span>@{todo.time ? todo.time : ""} </span>
                <span className="text-gray-500">On {todo.date}</span> <br />
                <span className="font-bold text-xl">{todo.title}</span>
                <br />
                <span>attendees {todo.attendees ? todo.attendees.length : 0}</span>
            </div>
        </div>
    )
}

export default TodoPage
