import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children;
    }
}

// const ErrorBoundary = (props) => {
//     const [hasError, setHasError] = useState(false);

//     if (hasError) {
//         return <h1>Oooops. That is not good</h1>
//     }
//     return props.children;
// }

export default ErrorBoundary;