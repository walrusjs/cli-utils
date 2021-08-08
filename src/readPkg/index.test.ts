import path from 'path';
import { readPackageAsync, readPackageSync } from './';

const fixtures = path.join(__dirname, 'fixtures');

describe('readPkg', () => {
  test('async', async () => {
    expect.assertions(1);

    const package_ = await readPackageAsync({
      cwd: fixtures
    });
    expect(package_.name).toEqual('unicorn');
  });

  test('sync', () => {
    const package_ = readPackageSync({
      cwd: fixtures
    });

    expect(package_.name).toEqual('unicorn');
  });
});
