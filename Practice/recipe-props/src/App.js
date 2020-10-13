import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Recipe title='pasta' />
            </div>
        );
    }
}

export default App;
