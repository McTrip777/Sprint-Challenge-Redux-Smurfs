import React, { Component } from 'react'
import { postSmurfs } from "../actions";
import { connect } from "react-redux";

export class SmurfForm extends Component {
    state={
        smurf:{
            name: '',
            age: '',
            height:'',
        }
    }

    submitSmurf = e => {
        e.preventDefault();
        this.props.postSmurfs(this.state.smurf);
        this.setState({
          smurf:{
              name: '',
              age: '',
              height:''
          }
      })
    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => {
            return {
                smurf:{
                    ...prevState.smurf,
                  [e.target.name]: e.target.value
                }
            }
        });
    };

     

  render() {
    return (
      <div>
        <form onSubmit={this.submitSmurf}>
          <input
            type="text"
            name="name"
            placeholder="Smurf Name"
            value={this.state.smurf.name}
            onChange={this.changeHandler}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Smurf Age"
            value={this.state.smurf.age}
            onChange={this.changeHandler}
            required
          />
          <input
            type="text"
            name="height"
            placeholder="Smurf Height"
            value={this.state.smurf.height}
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
