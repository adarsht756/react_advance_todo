import React, { useEffect } from 'react'

function Todo({ item }) {
    useEffect(() => {
        console.log("Todo Renderd")
    }, [])
    if (!item)
        return (<div />)
    else
        return (
            <div className="w-7/12 mx-auto border shadow hover:shadow-xl transition-all duration-500 my-8 px-10 py-6 text-xl">
                <span>@{item.time} </span><span className="text-gray-500">On {item.date}</span> <br />
                <span className="font-bold text-xl">{item.title}</span>
                <br />
                <span>attendees {item.attendees ? item.attendees.length : 0}</span>
            </div>
        )
}

export default Todo
