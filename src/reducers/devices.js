import {
  CALL_DEVICE_ACTION,
} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case CALL_DEVICE_ACTION: 
      console.log('inside of reducer device CALL_DEVICE_ACTION');
      return [
        ...state,
      ];

    default:
      return state;
  }
}

