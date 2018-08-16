import { callDeviceAction } from './index';

const baseUrl = 'http://192.168.1.148/api';

const lightOnUrl = `${baseUrl}?target=right&value=1`;
const lightOffUrl = `${baseUrl}?target=right&value=0`;
const rotationOnUrl = `${baseUrl}?target=left&value=1`;
const rotationOffUrl = `${baseUrl}?target=left&value=0`;

export const allOn = () => {
  return async (dispatch) => {
    return await Promise.all([
      dispatch(callDeviceAction(rotationOnUrl)),
      dispatch(callDeviceAction(lightOnUrl)),
    ]);
  }
}

export const allOff = () => {
  return async (dispatch) => {
    return await Promise.all([
      dispatch(callDeviceAction(rotationOffUrl)),
      dispatch(callDeviceAction(lightOffUrl)),
    ]);
  }
}

export const lightOn = () => {
  return async (dispatch) => {
    return await dispatch(callDeviceAction(lightOnUrl));
  }
}

export const lightOff = () => {
  return async (dispatch) => {
    return await dispatch(callDeviceAction(lightOffUrl));
  }
}
export const rotationOn = () => {
  return async (dispatch) => {
    return await dispatch(callDeviceAction(rotationOnUrl));
  }
}

export const rotationOff = () => {
  return async (dispatch) => {
    return await dispatch(callDeviceAction(rotationOffUrl));
  }
}
