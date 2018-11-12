import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static defaultProps = {
    type: 'submit'
  }

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    return (
      <button type={this.props.type}>
        {this.props.name}
      </button>
    )
  }
}

export default Button