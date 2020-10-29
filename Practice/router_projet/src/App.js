import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
            <Route path='/' component={Home}  exact/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <hr />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
