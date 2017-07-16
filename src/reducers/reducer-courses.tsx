import { FETCH_COURSES } from '../actions';

export default function( state = [], action: any ){
  switch ( action.type ){
    case FETCH_COURSES:
      console.log(action);
      return action.payload.data.course_list;    
    default:
      return state;
  }
}