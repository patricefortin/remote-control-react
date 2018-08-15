import BaseRemoter from './BaseRemoter';

export default class DummyRemoter extends BaseRemoter {
  callTarget = (baseUrl, target, value) => {
    console.log('Calling', baseUrl, target, value);
  }
}