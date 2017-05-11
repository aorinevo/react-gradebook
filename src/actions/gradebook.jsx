// import axios from 'axios';
// import cldata from '../../fixtures/json/instructor-course-list';
// import gbdata from '../../fixtures/json/instructor-gradebook-data';
// export const FETCH_GRADEBOOK = 'fetch_gradebook';
// export const FETCH_COURSES = 'fetch_courses';
// 
// //pass root in main config.
// const ROOT_URL = '/api';
// const API_KEY = '';
// 
// export function fetchGradebook(){
//   // const request = axios.get(`${ROOT_URL}/?action=gradebook&gbid=234`);
//   const request = new Promise((resolve, reject) => {
//     setTimeout(
//       () => resolve(gbdata)
//       ,1000);
//   })
//   return {
//     type: FETCH_GRADEBOOK,
//     payload: request
//   };
// }
// 
// export function fetchCourses(){
//   // const request = axios.get(`${ROOT_URL}?action=course_list`);  
//   const request = new Promise((resolve, reject) => {
//     setTimeout(
//       () => resolve(cldata)
//       ,1000);
//   })
//   return {
//     type: FETCH_COURSES,
//     payload: request
//   };
// }
// 
// // export function createPost( values, callback ){
// //   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then( (result) => callback() );
// //   return {
// //     type: CREATE_POST,
// //     payload: request
// //   };
// // }