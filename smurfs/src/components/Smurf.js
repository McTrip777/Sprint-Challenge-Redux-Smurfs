import React, { Component } from 'react'

export class Smurf extends Component {
  render() {
    return (
      <div>
      <h3>SMURF VILLAGE!!!</h3>
        {this.props.smurf.name}
      </div>
    )
  }
}

export default Smurf