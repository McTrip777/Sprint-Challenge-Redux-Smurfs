import React, { Component } from 'react'

export class Smurf extends Component {
  render() {
    return (
      <div>
        {this.props.smurf.name}
      </div>
    )
  }
}

export default Smurf