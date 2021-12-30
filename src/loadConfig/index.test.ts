import path from 'path';
import { loadConfig } from './';

export const FIXTURES_DIR = path.resolve(__dirname, 'fixtures');

describe('loadConfig', () => {
  it('加载ts配置文件', async () => {
    const { data } = await loadConfig(FIXTURES_DIR, ['.walrusrc.ts']);

    expect(data).toEqual({
      name: 'walrus'
    });
  })

  it('加载js配置文件', async () => {
    const { data } = await loadConfig(FIXTURES_DIR, ['walrus.config.js']);

    expect(data).toEqual({
      name: 'walrus'
    });
  })
})
