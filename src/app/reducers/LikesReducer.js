import {
  TOGGLE_LIKES_SUCCESS,
  TOGGLE_LIKES_ERROR
} from '../actions/ActionTypes';                         

export default function likes(state={}, action){
  switch(action.type){
    case TOGGLE_LIKES_SUCCESS:

      let newState = {}; 

      if (state[action.payload]) { //checking to see if there is an id which will toggle 'like' else 'dislike' in state
        newState[action.payload] = false;
      } else {
        newState[action.payload] = true;      
      }

      return Object.assign({}, state, newState);

    case TOGGLE_LIKES_ERROR:
      return Object.assign({}, state, {
        error: aciton.payload.error
      });
    default:
      return state;
  };
};