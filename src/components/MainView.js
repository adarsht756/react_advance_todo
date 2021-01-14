import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from './userContext'
import Todo from './Todo'
function MainView() {

    const consumerVals = useContext(userContext)

    return (
        <div className="mx-auto py-10" style={{ width: '800px' }}>
            <span className="mx-auto font-bold text-4xl ml-40">Events for Adarsh</span>
            {
                consumerVals.vals.todoList.map((el) => {
                    return <Link to={{
                        pathname: `/todo/${el.id}`, state: {
                            event: el,
                            passedProp: true
                        }
                    }} ><Todo key={el.id} item={el} /></Link>
                })
            }
        </div>
    )
}

export default MainView
