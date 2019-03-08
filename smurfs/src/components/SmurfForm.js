import React, { Component } from 'react'
import { postSmurfs } from "../actions";
import { connect } from "react-redux";

export class SmurfForm extends Component {
    state={
            name: '',
            age: '',
            height:'',
    }

    submitSmurf = e => {
        e.preventDefault();
        this.props.postSmurfs(this.state);
        this.setState({
              name: '',
              age: '',
              height:''
      })
    }

    changeHandler = e => {
        e.persist();
        this.setState({[e.target.name]: e.target.value})
    };

     

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitSmurf}>
          <input
            type="text"
            name="name"
            placeholder="Smurf Name"
            value={this.state.name}
            onChange={this.changeHandler}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Smurf Age"
            value={this.state.age}
            onChange={this.changeHandler}
            required
          />
          <input
            type="text"
            name="height"
            placeholder="Smurf Height"
            value={this.state.height}
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
