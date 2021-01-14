import React from 'react'
import store from '../store/store'

const BaseSelect = React.forwardRef((props, ref) => {
    {
        return (
            <select ref={ref} className="selectBase">
                {
                    store.categories.map((el) => {
                        return <option value={el} key={el}>{el}</option>
                    })
                }
            </select>
        )
    }
})

export default BaseSelect
