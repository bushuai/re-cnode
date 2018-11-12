import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0,
      color: 'red'
    }
  }

  handleDec = () => {
    const count = this.state.count - 1
    this.setState({ count })
  }

  handleInc = () => {
    const count = this.state.count + 1
    this.setState({ count })
  }

  render () {
    const { count } = this.state
    const { color } = this.props

    return (
     <div className="counter" style={{ color }}>
        <div>Counter: {count}</div>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decreemnt</button>
      </div>
    )
  }
}

export default Counter