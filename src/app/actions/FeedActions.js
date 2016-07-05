import * as api from '../util/flickrApi';
import {
  FETCH_ALL_PHOTOS_SUCCESS, 
  FETCH_ALL_PHOTOS_ERROR 
} from './ActionTypes';

export function fetchAllPhotos() {
  return dispatch => {
    api.getFlickrImages().then((result) => { //retrieving the photos by calling the api 
      dispatch(fetchAllPhotosSuccess(result)); //dispatching the success 
    }).catch((error) => {
      dispatch(fetchAllPhotosError(error));   
    });
  };
};

export function fetchAllPhotosSuccess(photos) {
  return{
    type: FETCH_ALL_PHOTOS_SUCCESS,
    payload: photos 
  };
};

export function fetchAllPhotosError(error) {
  return{
    type: FETCH_ALL_PHOTOS_ERROR,
    payload: { error }
  }
}