import { FETCH_GRADEBOOK } from '../actions';

export default function( state = {}, action: any ){
  switch ( action.type ){
    case FETCH_GRADEBOOK:  
      console.log(action);    
      return action.payload;    
    default:
      return state;
  }
}