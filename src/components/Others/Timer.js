import React, { Component } from 'react'

class Timer extends Component {
  state = {
    time: new Date().toLocaleTimeString()
  }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
   return (
    <div>
      time: {this.state.time}
    </div>
   )
  }
}

export default Timer