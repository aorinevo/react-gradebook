//import axios from 'axios';
import cldata from '../fixtures/json/create-student-response';

export const FETCH_STUDENT = 'fetch_student';
export const CREATE_STUDENT = 'create_student';
export const DELETE_STUDENT = 'delete_student';

//pass root in main config.
// const ROOT_URL = '/api';
// const API_KEY = '';

export function createStudent( postParams: object ){
  // const request = axios.get(`http://localhost/wordpress/wp-admin/admin-ajax.php?action=angb_user`, postParams ); 
  console.log('creating student: ');
  const request = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(cldata)
      ,1000);
  });
  return {
    type: CREATE_STUDENT,
    payload: request
  };
}

export function deleteStudent(){
  // const request = axios.get(`${ROOT_URL}?action=course`);  
  const request = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(cldata)
      ,1000);
  });
  return {
    type: CREATE_STUDENT,
    payload: request
  };
}

export function fetchStudent(){
  // const request = axios.get(`http://localhost/wordpress/wp-admin/admin-ajax.php?action=course_list`);
  const request = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(cldata)
      ,1000);
  });
  return {
    type: FETCH_STUDENT,
    payload: request
  };
}