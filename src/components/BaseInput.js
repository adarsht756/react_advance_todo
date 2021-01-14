import React from 'react'

const BaseInput = React.forwardRef((props, ref) => {

    return (
        <input placeholder={props.title.value} className="BaseInput" ref={ref} type={props.title.type} />
    )
})

export default BaseInput
