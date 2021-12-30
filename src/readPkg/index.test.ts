import path from 'path';
import { readPackage } from './';

const fixtures = path.join(__dirname, 'fixtures');

describe('readPkg', () => {
  it('basic', () => {
    const pkg = readPackage(fixtures);

    expect(pkg?.data?.name).toEqual('unicorn');
  });
});
