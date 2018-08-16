import { leftOn } from '../powerbar.js';

it('can call a single action', () => {
  const res = leftOn();
  expect(res).toBeInstanceOf((() => {}).constructor);
});
