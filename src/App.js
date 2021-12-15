import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import SearchBox from './components/SearchBox';
import './App.css';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        console.log(count)
    }, [count]) // only run if count changes
    
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robots => robots.name.toLowerCase().includes(searchField.toLowerCase()));

    if (robots.length === 0) {
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

export default App;