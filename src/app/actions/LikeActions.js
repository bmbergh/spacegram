import {
  TOGGLE_LIKES_SUCCESS, 
  TOGGLE_LIKES_ERROR 
} from './ActionTypes';

export function toggleLike(id){ //passing id of photo that is liked 
  return{ 
    type: TOGGLE_LIKES_SUCCESS,
    payload: id
  }
}

export function toggleLikeError(error){
  return{ 
    type: TOGGLE_LIKES_ERROR,
    payload: {error}
  }
}
