import React, { useReducer, useEffect } from 'react'
import MainView from './components/MainView'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import { UserProvider } from './components/userContext'
import API from './services/api'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateTodo from './components/CreateTodo'
import TodoPage from './components/TodoPage'
import NotFound from './components/NotFound'
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
        <UserProvider value={{ vals: state, method: dispatch }}>
          <Navbar />
          <Switch>
            <Route exact path="/" render={
              () => (
                <React.Fragment>
                  {
                    state.loading ?
                      <Loader />
                      :
                      < MainView />
                  }
                </React.Fragment>
              )
            } key={window.location.pathname} />
            <Route exact path="/create" component={CreateTodo} />
            {/* <ErrorBoundary> */}
            <Route exact path="/todo/:id" component={TodoPage} />
            {/* </ErrorBoundary> */}
            <Route exact path="*" component={NotFound} />
          </Switch>
        </UserProvider>
      </div>
    </Router>
  )
}

export default App
