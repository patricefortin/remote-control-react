import { callDeviceAction } from '../index';

it('can call a device action', () => {
  const res = callDeviceAction('foo', 'bar', 'baz');
  //expect(res).toBeInstanceOf({}.constructor);
  expect(res).toBeInstanceOf((() => {}).constructor);
});
