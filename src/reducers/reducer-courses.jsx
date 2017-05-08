import _ from 'lodash';
import { FETCH_COURSES } from '../actions';

export default function( state = [], action ){
  switch ( action.type ){
    case FETCH_COURSES:
      console.log(action);
      return action.payload.course_list;
      break;      
    default:
      return state;
  }
}