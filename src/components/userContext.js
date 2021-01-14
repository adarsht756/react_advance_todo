import React from 'react'

const userContext = React.createContext()

const UserConsumer = userContext.Consumer
const UserProvider = userContext.Provider

export { UserConsumer, UserProvider, userContext }