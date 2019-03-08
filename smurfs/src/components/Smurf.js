import React, { Component } from 'react'
import { connect } from "react-redux";
import { deleteSmurfs } from '../actions'

export class Smurf extends Component {

  render() {
    return (
      <div className="smurf">
        {this.props.smurf.name}
        <button 
        onClick={() => this.props.deleteSmurfs(this.props.smurf.id)}>
        Remove
        </button>
      </div>
    )
  }
}


export default connect(null, { deleteSmurfs })(Smurf)