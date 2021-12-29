import path from 'path';
import JoyCon from 'joycon';
import { bundleRequire } from '@walrus/bundle-require';

export async function loadConfig<T = any>(
  cwd: string,
  configFiles: string[],
): Promise<{ path?: string; data?: T; }> {
  const configJoycon = new JoyCon();
  const configPath = await configJoycon.resolve(
    configFiles,
    cwd,
    path.parse(cwd).root
  );

  if (configPath) {
    const config = await bundleRequire({
      cwd,
      filePath: configPath
    });

    return {
      path: configPath,
      data: config.mod.tsup || config.mod.default || config.mod,
    }
  }

  return {}
}
