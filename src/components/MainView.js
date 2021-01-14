import React from 'react'
import { UserConsumer } from './userContext'
import Todo from './Todo'
function MainView() {
    return (
        <UserConsumer>
            {
                (todoList) => {
                    return (
                        <div className="mx-auto py-10" style={{ width: '800px' }}>
                            <span className="mx-auto font-bold text-4xl ml-40">Events for Adarsh</span>
                            {
                                todoList.map((el) => {
                                    return <Todo key={el.id} item={el} />
                                })
                            }
                        </div>
                    )
                }
            }
        </UserConsumer >
    )
}

export default MainView
