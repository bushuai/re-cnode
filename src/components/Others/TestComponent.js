import React, { Component } from 'react'
import { fetchTopics } from '../services/cnode'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class TestComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      fetching: false
    }
  } 

  componentDidMount () {
    this.notify()
    this.setState({ fetching: true })
    
    fetchTopics()
    .then(response => {
      console.log('# response: ', response)
      this.dismiss()
      this.setState({ user: {
        name: 'bushuai',
        age: 20
      }, fetching: false })
    })
    .catch(() => {
      alert('error occurred')
    })
  }

  dismiss = () => {
    toast.dismiss()
  }
  notify = () => {
    toast.info('fetching data...')
  }

  render () {
    return (
      <div>
        <ToastContainer />
        <h2>hello test component</h2>
        { this.state.fetching && <div>fetching data...</div>}
        { this.state.user && (<div>
          <h3>User Info:</h3>
          <div>name: {this.state.user.name}</div>
          <div>age: {this.state.user.age}</div>
        </div>)}
      </div>
    )
  }
}

export default TestComponent