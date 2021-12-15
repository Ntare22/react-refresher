import React, { Component } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import SearchBox from './components/SearchBox';
import './App.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}


