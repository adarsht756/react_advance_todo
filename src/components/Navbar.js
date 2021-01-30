import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import { userContext } from './userContext'
function Navbar() {

    const payload = useContext(userContext)

    const checkTodoStatus = () => {
        console.log(payload.vals.isTodosUpdated)
        if (typeof payload.vals.isTodosUpdated !== "undefined") {
            api.getEvents()
                .then(res => {
                    payload.method({ type: 'FETCH_SUCCESS', payload: res.data })
                })
                .catch(() => payload.method({ type: 'FETCH_SUCCESS' }))
        }

    }

    return (
        <div className="navbar">
            <h1>Todo List</h1>
            <div className="flex">
                <Link to="/" onClick={checkTodoStatus} className="link-btn">List</Link> |
                <Link to="/create" className="link-btn">Create</Link>
            </div>
        </div>
    )
}

export default Navbar