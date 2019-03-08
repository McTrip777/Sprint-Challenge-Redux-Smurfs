import React, { Component } from 'react'
import { postSmurfs } from "../actions";
import { connect } from "react-redux";

export class SmurfForm extends Component {
    state={
        smurfName: '',
        smurfAge: '',
        smurfHeight:'',
    }

    changeHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      submitSmurf = e => {
          e.preventDefault();
          this.props.postSmurfs(this.state);
          this.setState({
            smurfName: '',
            smurfAge: '',
            smurfHeight:''
        })
      }

  render() {
    return (
      <div>
        <form onSubmit={this.submitSmurf}>
          <input
            type="text"
            name="smurfName"
            placeholder="Smurf Name"
            value={this.state.smurfName}
            onChange={this.changeHandler}
            required
          />
          <input
            type="number"
            name="smurfAge"
            placeholder="Smurf Age"
            value={this.state.smurfAge}
            onChange={this.changeHandler}
            required
          />
          <input
            type="text"
            name="smurfHeight"
            placeholder="Smurf Height"
            value={this.state.smurfHeight}
            onChange={this.changeHandler}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { postSmurfs })(SmurfForm)
