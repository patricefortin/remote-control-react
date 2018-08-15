import BaseRemoter from './BaseRemoter';
import { callDeviceAction } from '../actions';

export default class HttpRemoter extends BaseRemoter {
  store;

  constructor(store) {
    super();
    this.store = store;
  }

  callTarget = (baseUrl, target, value) => {
    const url = this.forgeUrl(baseUrl, target, value);
    console.log('Will call', url);
    this.store.dispatch(callDeviceAction(url));
  }
}