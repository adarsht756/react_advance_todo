import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="navbar">
            <h1>Todo List</h1>
            <div className="flex">
                <Link to="/" className="btn">List</Link> |
                <Link to="/create" className="btn">Create</Link>
            </div>
        </div>
    )
}

export default Navbar