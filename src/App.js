import React, { useReducer, useEffect } from 'react'
import Navbar from './components/Navbar'
import { UserProvider } from './components/userContext'
import { BrowserRouter } from 'react-router-dom'
import Routes from './router/routes'
import PreloadLazyComponents from './services/PreloadLazyComponents'
import Loader from './components/Loader'

const initialState = {
  todoList: [],
  loading: true,
  errors: '',
  isTodosUpdated: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case ('FETCH_SUCCESS'):
      return {
        todoList: action.payload,
        loading: false,
        errors: '',
        isTodosUpdated: false
      }
    case ('FETCH_ERROR'):
      return {
        loading: false,
        errors: action.payload
      }
    default:
      return state
  }
}

function App() {

  useEffect(() => {
    console.log("App renderd")
  })

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <UserProvider value={{ vals: state, method: dispatch }}>
          <Navbar />
          <PreloadLazyComponents />
          <Routes />
        </UserProvider>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App