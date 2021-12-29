import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import SearchBox from './components/SearchBox';
import './App.css';

import { setSearchField, requestRobots } from './action';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = (props) => {
    // const [robots, setRobots] = useState([]);
    const { searchField, onSearchChange, isPending, robots, onRequestRobots } = props;
    const [count, setCount] = useState(0);

    console.log(props)

    useEffect(() => onRequestRobots(), []) // only run if count changes
    
    // const onSearchChange = (event) => {
    //     setSearchField(event.target.value);
    // }

    const filteredRobots = robots.filter(robots => robots.name.toLowerCase().includes(searchField.toLowerCase()));

    if (isPending) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <button onClick={() => setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
