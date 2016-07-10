import {
  FILTER_ACTIONS_SUCCESS
} from '../actions/ActionTypes';

let initialState ={
  likes: false
}

export default function filter(state=initialState, action){
  switch(action.type){
    case FILTER_ACTIONS_SUCCESS:
    if(state.likes){
     state.likes = false 
    }else{
      state.likes = true
    }
    return state;
    default:
      return state;
  }
}

// if (state[action.payload]) { //checking to see if there is an id which will toggle 'like' else 'dislike' in state
//         newState[action.payload] = false;
//       } else {
//         newState[action.payload] = true;      
//       }