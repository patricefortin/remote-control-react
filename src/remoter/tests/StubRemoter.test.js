import StubRemoter from '../StubRemoter';

const baseUrl = 'http://localhost/'

it('can call a remoter', () => {
  const remoter = new StubRemoter();
  remoter.callTarget("foo", "bar");
});

it('can forge a URL', () => {
  const remoter = new StubRemoter();
  const finalUrl = remoter.forgeUrl(baseUrl, "target", "value");
  expect(finalUrl).toMatch(/^http/);
})