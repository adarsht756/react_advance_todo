import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="text-7xl font-semibold text-green-600 z-50 center">
            Hey you have lost somewhere. <Link to="/">Click here to reach home</Link>
        </div>
    )
}

export default NotFound
