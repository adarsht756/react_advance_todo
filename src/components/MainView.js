import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from './userContext'
import Todo from './Todo'
import ErrorBoundary from './ErrorBoundary'
function MainView() {

    const consumerVals = useContext(userContext)
    // if (typeof consumerVals !== 'undefined') {
    //     throw new Error('Something went wrong')
    // }
    return (
        <div className="mx-auto py-10" style={{ width: '800px' }}>
            <span className="mx-auto font-bold text-4xl ml-40 flex items-center">Events for Adarsh</span>
            {
                consumerVals.vals.todoList.map((el) => {
                    return <Link key={el.id} to={{
                        pathname: `/todo/${el.id}`, state: {
                            event: el,
                            passedProp: true
                        }
                    }} ><Todo item={el} /></Link>
                })
            }
        </div>
    )
}

export default MainView
