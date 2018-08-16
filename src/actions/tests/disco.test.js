import { allOn } from '../disco.js';

it('can call a single action to activate all disco targets', () => {
  const res = allOn();
  expect(res).toBeInstanceOf((() => {}).constructor);
});