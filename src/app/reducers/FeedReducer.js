import {
  FETCH_ALL_PHOTOS_SUCCESS, 
  FETCH_ALL_PHOTOS_ERROR
} from '../actions/ActionTypes';

let initialState ={
  photos: []
}

export default function feed(state = initialState, action) {
  switch(action.type){
    case FETCH_ALL_PHOTOS_SUCCESS:
      return{
        photos: action.payload.photos.photo
      } 

    case FETCH_ALL_PHOTOS_ERROR:
      return Object.assign({}, state, {
        error: action.payload.error
      });
      
    default:
      return state;
  };
};