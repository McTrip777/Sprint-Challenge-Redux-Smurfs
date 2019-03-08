import React, { Component } from 'react'
import Smurf from './Smurf'
import { connect } from "react-redux";
import { getSmurfs } from "../actions";


class SmurfList extends Component {

    componentDidMount(){
        this.props.getSmurfs();
    }

render(){
  return (
    <div className="smurfs">
     <h2> SMURF VILLAGE!!! </h2>
     {this.props.smurfs.map((smurf,index) => (
         <Smurf key={index + 1} smurf={smurf} />
     ))}
    </div>
  )
}
}
const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(mapStateToProps, { getSmurfs })(SmurfList)
