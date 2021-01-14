import React, { useReducer, useEffect } from 'react'
import MainView from './components/MainView'
import Navbar from './components/Navbar'
import { UserProvider } from './components/userContext'
import API from './services/api'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateTodo from './components/CreateTodo'

const initialState = {
  todoList: [],
  loading: true,
  errors: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case ('FETCH_SUCCESS'):
      return {
        todoList: action.payload,
        loading: false,
        errors: ''
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

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    console.log("parent")
    API.getEvents()
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR', payload: err })
      })
  }, [])

  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" render={
          () => (
            <React.Fragment>
              <UserProvider value={state.todoList}>
                {
                  state.loading ?
                    'Please wait while we fetch data'
                    :
                    < MainView />
                }
              </UserProvider>
            </React.Fragment>
          )
        } key={window.location.pathname} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  )
}

export default App
