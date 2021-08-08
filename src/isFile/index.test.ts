import path from 'path';
import { isFile } from './';

export const FIXTURES_DIR = path.resolve(__dirname, 'fixtures');

describe('isFile', () => {
  test('测试目录', async () => {
    expect.assertions(1);

    expect(await isFile(FIXTURES_DIR)).toEqual(false);
  });

  test('测试文件存在', async () => {
    expect.assertions(1);

    expect(await isFile(path.resolve(FIXTURES_DIR, 'test.ts'))).toEqual(true);
  });

  test('测试文件不存在', async () => {
    expect.assertions(1);

    expect(await isFile(path.resolve(FIXTURES_DIR, 'test1.ts'))).toEqual(false);
  });
});

