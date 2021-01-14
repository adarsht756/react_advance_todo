import React, { useContext } from 'react'
import { userContext } from './userContext'
import Todo from './Todo'
function MainView() {

    const consumerVals = useContext(userContext)

    return (
        <div className="mx-auto py-10" style={{ width: '800px' }}>
            <span className="mx-auto font-bold text-4xl ml-40">Events for Adarsh</span>
            {
                consumerVals.vals.todoList.map((el) => {
                    return <Todo key={el.id} item={el} />
                })
            }
        </div>
    )
}

export default MainView
