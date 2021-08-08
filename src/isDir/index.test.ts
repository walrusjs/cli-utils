import path from 'path';
import { isDir } from './';

export const FIXTURES_DIR = path.resolve(__dirname, 'fixtures');

describe('isDir', () => {
  test('测试文件', async () => {
    expect.assertions(1);

    expect(await isDir(path.resolve(FIXTURES_DIR, 'test.ts'))).toEqual(false);
  });

  test('测试文件夹存在', async () => {
    expect.assertions(1);

    expect(await isDir(FIXTURES_DIR)).toEqual(true);
  });

  test('测试文件夹不存在', async () => {
    expect.assertions(1);

    expect(await isDir(path.resolve(FIXTURES_DIR, 'test1'))).toEqual(false);
  });
});

