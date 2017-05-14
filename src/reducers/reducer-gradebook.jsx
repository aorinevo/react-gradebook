import _ from 'lodash';
import { FETCH_GRADEBOOK } from '../actions';

export default function( state = {}, action ){
  switch ( action.type ){
    case FETCH_GRADEBOOK:  
      console.log(action);    
      return action.payload;
      break;     
    default:
      return state;
  }
}