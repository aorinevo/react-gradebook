// import axios from 'axios';
// import cldata from '../../fixtures/json/instructor-course-list';
// 
// export const FETCH_COURSES = 'fetch_courses';
// export const CREATE_COURSE = 'create_course';
// export const DELETE_COURSE = 'delete_course';
// 
// //pass root in main config.
// const ROOT_URL = '/api';
// const API_KEY = '';
// 
// export function createCourse(){
//   // const request = axios.get(`${ROOT_URL}?action=course`);  
//   const request = new Promise((resolve, reject) => {
//     setTimeout(
//       () => resolve(cldata)
//       ,1000);
//   })
//   return {
//     type: CREATE_COURSE,
//     payload: request
//   };
// }
// 
// export function deleteCourse(){
//   // const request = axios.get(`${ROOT_URL}?action=course`);  
//   const request = new Promise((resolve, reject) => {
//     setTimeout(
//       () => resolve(cldata)
//       ,1000);
//   })
//   return {
//     type: CREATE_COURSE,
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