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
     <div className='smurfContainer'>
     {this.props.smurfs.map(smurf => (
         <Smurf smurf={smurf} />
     ))}
    </div></div>
  )
}
}
const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(mapStateToProps, { getSmurfs })(SmurfList)
