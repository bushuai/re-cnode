import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        home Page
        <NavLink to='/login'>Login</NavLink>
      </div>
    )
  }
}

export default Home