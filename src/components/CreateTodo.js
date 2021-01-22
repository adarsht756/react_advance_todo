import React, { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../services/api'
import BaseInput from './BaseInput'
import BaseSelect from './BaseSelect'
import { userContext } from './userContext'

function CreateTodo() {
    const catValue = useRef(null)
    const titleValue = useRef(null)
    const descValue = useRef(null)
    const locationValue = useRef(null)
    const dateValue = useRef(null)
    const consumerVals = useContext(userContext)
    const history = useHistory();
    const submitForm = (e) => {

        e.preventDefault()
        const event = {
            category: catValue.current.value,
            date: dateValue.current.value,
            title: titleValue.current.value,
            description: descValue.current.value,
            location: locationValue.current.value,
            attendees: ["Asd"]
        }

        API.postEvent(event)
            .then(consumerVals.vals.isTodosUpdated = true)
            .catch(e => {
                console.log(e)
            })
        history.push({
            pathname: `/todo/${event.id}`,
            state: {
                event: event,
                passedProp: true
            }
        })
    }
    return (
        <div className="page">
            <div style={{ width: '500px', margin: 'auto', padding: '40px 0' }} >
                <span className="text-5xl font-bold">Create an Event</span>
                <form onSubmit={submitForm}>
                    <div className="flex flex-col my-8">
                        <label className="text-gray-500 font-semibold">Select category</label>
                        <BaseSelect ref={catValue} />
                    </div>
                    <span className="text-2xl font-semibold ">Name & describe your event</span>
                    <div className="flex flex-col my-8">
                        <label className="text-gray-500 font-semibold">Title</label>
                        <BaseInput title={{ value: "Title", type: "text" }} ref={titleValue} />
                    </div>
                    <div className="flex flex-col my-8">
                        <label className="text-gray-500 font-semibold">Descritption</label>
                        <BaseInput title={{ value: "Description", type: "text" }} ref={descValue} />
                    </div>
                    <span className="text-2xl font-semibold ">Where is your event?</span>
                    <div className="flex flex-col my-8">
                        <label className="text-gray-500 font-semibold">Location</label>
                        <BaseInput title={{ value: "Location", type: "text" }} ref={locationValue} />
                    </div>
                    <span className="text-2xl font-semibold ">When is your event?</span>
                    <div className="flex flex-col my-8">
                        <label className="text-gray-500 font-semibold">Date</label>
                        <BaseInput title={{ value: "today", type: "date" }} ref={dateValue} />
                    </div>
                    <button type="submit" className="button -fill-gradient">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo
/* application tool, core network...
    App layer , transp layer, network and data limkn, routers => management protocols funtioning
*/