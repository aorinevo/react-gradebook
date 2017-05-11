import axios from 'axios';
import cldata from '../../fixtures/json/instructor-course-list';
import gbdata from '../../fixtures/json/instructor-gradebook-data.js';

export const FETCH_GRADEBOOK = 'fetch_gradebook';
export const FETCH_COURSES = 'fetch_courses';
export const CREATE_COURSE = 'create_course';
export const DELETE_COURSE = 'celete_course';

const ROOT_URL = '/api';
const API_KEY = '';

export function fetchGradebook( id ){
  console.log('id ', id);
  const request = axios.get(`http://localhost/wordpress/wp-admin/admin-ajax.php?action=gradebook&gbid=${id}`);
  // const request = new Promise((resolve, reject) => {
  //   setTimeout(
  //     () => resolve(gbdata)
  //     ,1000);
  // })
  return {
    type: FETCH_GRADEBOOK,
    payload: request
  };
}

export function fetchCourses(){
  const request = axios.get(`http://localhost/wordpress/wp-admin/admin-ajax.php?action=course_list`);
  // const request = new Promise((resolve, reject) => {
  //   setTimeout(
  //     () => resolve(cldata)
  //     ,1000);
  // })
  return {
    type: FETCH_COURSES,
    payload: request
  };
}

// export function createPost( values, callback ){
//   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then( (result) => callback() );
//   return {
//     type: CREATE_POST,
//     payload: request
//   };
// }