/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

const url = 'http://localhost:3333/smurfs'

export const READ_SMURFS_START = 'READ_SMURFS_START';
export const READ_SMURFS_SUCCESS = 'READ_SMURFS_SUCCESS';
export const READ_SMURFS_FAIL = 'READ_SMURFS_FAIL';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  dispatch({ type: READ_SMURFS_START})
  axios
    .get(url)
    .then(res => dispatch({type: READ_SMURFS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: READ_SMURFS_FAIL, payload: err}))
}

// export const CREATE_SMURFS_START = 'CREATE_SMURFS_START';
// export const CREATE_SMURFS_SUCCESS = 'CREATE_SMURFS_SUCCESS';
// export const CREATE_SMURFS_FAIL = 'CREATE_SMURFS_FAIL';