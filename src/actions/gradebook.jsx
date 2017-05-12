import axios from 'axios';
import gbdata from '../../fixtures/json/instructor-gradebook-data';
export const FETCH_GRADEBOOK = 'fetch_gradebook';

//pass root in main config.
const ROOT_URL = '/api';
const API_KEY = '';

export function fetchGradebook( id ){
//  const request = axios.get(`http://localhost/wordpress/wp-admin/admin-ajax.php?action=gradebook&gbid=${id}`);
  const request = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(gbdata)
      ,1000);
  })
  return {
    type: FETCH_GRADEBOOK,
    payload: request
  };
}