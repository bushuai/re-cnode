import React, { Component } from 'react'

const UserList = () => (
  <ul>
    {[1, 2, 3, 4].map(item => (<li key={item}>{item}</li>))}
  </ul>
)

class ComponentSample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'lifecycle of React.Component'
    }
  }

  handleClick = () => {
    this.setState((prevState, props) => {
      return {
        text: prevState.text + ' clicked'
      }
    })
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('#lifecycle --> getDerivedStateFromProps')
  // }
  
  componentWillMount () {
    console.log('#lifecycle --> componentWillMount')
  }

  render () {
    return (<div>
      <p onClick={this.handleClick}>
        {this.state.text}
      </p>
      <UserList />
      </div>)
  }

  componentDidMount () {
    console.log('#lifecycle --> componentDidMount')
  }

  componentWillReceiveProps () {
    console.log('#lifecycle --> componentWillReceiveProps')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('#lifecycle --> shouldComponentUpdate')
    return true
  }

  componentWillUpdate () {
    console.log('#lifecycle --> componentWillUpdate')
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('#lifecycle --> getSnapshotBeforeUpdate')
  }

  componentDidUpdate () {
    console.log('#lifecycle --> componentDidUpdate')
  }

  componentDidCatch () {
    console.log('#lifecycle --> componentDidCatch')
  }

  componentWillUnmount () {
    console.log('#lifecycle --> componentWillUnmount')
  }
  
}

ComponentSample.defaultProps = {
  name: 'ComponentSample'
}

ComponentSample.displayName = 'Example-Component'

export default ComponentSample