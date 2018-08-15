export const CALL_DEVICE_ACTION = 'CALL_DEVICE_ACTION';

export const callDeviceAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log('json', json)

      return dispatch({
        type: CALL_DEVICE_ACTION,
        result: json,
      });

    } catch (e) {
      console.log('failed to fetch: ', e)
    }

  };
}
