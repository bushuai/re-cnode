import React, { Component } from 'react'

const LoginButton = props => (<button>Login in</button>)
const LogoutButton = props => (<button>Login out</button>)
const Gretting = props => (<div>{props.loggedIn ? 'welcome back' : 'please log in'}</div>)

class LoginControl extends Component {
  state = {
    loggedIn: false
  }

  toggleLoginStatus = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render () {
    const { loggedIn } = this.state
    const button = loggedIn ? <LogoutButton /> : <LoginButton />

    return (
      <div>
        <Gretting loggedIn={loggedIn} />
        {button}
        <button onClick={this.toggleLoginStatus}>Toggle Status</button>
      </div>
    )
  }
}

export default LoginControl