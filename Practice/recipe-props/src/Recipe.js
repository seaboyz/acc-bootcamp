import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        return <div className='App'>Recipe {this.props.title}</div>;
    }
}

export default Recipe;
