// Flickr API Key: a5e95177da353f58113fd60296e1d250
// Nasa's user id: 24662369@N07
// Endpoint https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos
// https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=API_KEY&user_id=USER_ID&format=json&nojsoncallback=1

import 'whatwg-fetch'; //why a polyfill? well Safari doesn't yet support `fetch` that is why :p 
//Ideally these keys would be in an .ENV file 
const API_KEY = 'a5e95177da353f58113fd60296e1d250';
const USER_ID = '24662369@N07';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${API_KEY}&user_id=${USER_ID}&format=json&nojsoncallback=1`;

export function getFlickrImages(){
  return fetch(`${API_ENDPOINT}`)
    .then((response)=> {
      return response.json()
    })
    .catch((err) =>{
      return err;
    });
};