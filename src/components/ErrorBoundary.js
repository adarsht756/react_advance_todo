import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedSateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            console.log("asd")
            return <h1>Something went wrong</h1>
        }
        else {
            console.log("asd")
            return this.props.children
        }
    }
}

export default ErrorBoundary
