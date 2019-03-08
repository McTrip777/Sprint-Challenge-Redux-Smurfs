/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
  */
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
import axios from "axios";

const url = 'http://localhost:3333/smurfs'

// READ
export const READ_SMURFS_START = 'READ_SMURFS_START';
export const READ_SMURFS_SUCCESS = 'READ_SMURFS_SUCCESS';
export const READ_SMURFS_FAIL = 'READ_SMURFS_FAIL';

export const getSmurfs = () => dispatch => {
  dispatch({ type: READ_SMURFS_START})
  axios
    .get(url)
    .then(res => dispatch({type: READ_SMURFS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: READ_SMURFS_FAIL, payload: err}))
}


// CREATE
export const CREATE_SMURFS_START = 'CREATE_SMURFS_START';
export const CREATE_SMURFS_SUCCESS = 'CREATE_SMURFS_SUCCESS';
export const CREATE_SMURFS_FAIL = 'CREATE_SMURFS_FAIL';

export const postSmurfs = newSmurf => dispatch => {
  dispatch({ type: CREATE_SMURFS_START})
  axios
    .post(url, newSmurf)
    .then(res => dispatch({type: CREATE_SMURFS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: CREATE_SMURFS_FAIL, payload: err}))
}

export const DELETE_SMURFS_START = 'DELETE_SMURFS_START';
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS';
export const DELETE_SMURFS_FAIL = 'DELETE_SMURFS_FAIL';

export const deleteSmurfs = id => dispatch => {
  dispatch({ type: DELETE_SMURFS_START})
  axios
    .delete(`${url}/${id}`)
    .then(() => dispatch({type: DELETE_SMURFS_SUCCESS, payload: id}))
    .catch(err => dispatch({type: DELETE_SMURFS_FAIL, payload: err}))
}