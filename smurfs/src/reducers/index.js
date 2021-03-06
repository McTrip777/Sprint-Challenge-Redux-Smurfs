/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  READ_SMURFS_START,
  READ_SMURFS_SUCCESS,
  READ_SMURFS_FAIL,
  CREATE_SMURFS_START,
  CREATE_SMURFS_SUCCESS,
  CREATE_SMURFS_FAIL,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAIL,
} from "../actions";


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false,
   deletingSmurf: false,
   error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    // READ
    case READ_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
      case READ_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null
      }
      case READ_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }

    // CREATE
      case CREATE_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
      case CREATE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
      }
      case CREATE_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }

      //DELETE
      case DELETE_SMURFS_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      }
      case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
        deletingSmurf: false,
      }
      case DELETE_SMURFS_FAIL:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload,
      }


  default:
  return state;
}
};