export default class BaseRemoter {
  constructor() {
  }

  callTarget = (baseUrl, target, value) => { throw Error('Not implemented'); }

  forgeUrl = (baseUrl, target, value) => {
    return `${baseUrl}?target=${target}&value=${value}`;
  }

}