import { callDeviceAction } from './index';

const baseUrl = 'http://192.168.1.113/api';

const rightOnUrl = `${baseUrl}?target=right&value=1`;
const rightOffUrl = `${baseUrl}?target=right&value=0`;
const leftOnUrl = `${baseUrl}?target=left&value=1`;
const leftOffUrl = `${baseUrl}?target=left&value=0`;

export const rightOn = () => {
  return async (dispatch) => {
    return await dispatch(callDeviceAction(rightOnUrl));
  }
}

export const rightOff = () => {
  return async (dispatch) => {
    return await dispatch(callDeviceAction(rightOffUrl));
  }
}

export const leftOn = () => {
  return async (dispatch) => {
    return await dispatch(callDeviceAction(leftOnUrl));
  }
}

export const leftOff = () => {
  return async (dispatch) => {
    return await dispatch(callDeviceAction(leftOffUrl));
  }
}


