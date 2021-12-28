import JoyCon from 'joycon';
import path from 'path';
import { bundleRequire } from 'bundle-require';

export async function loadConfig(
  cwd: string,
  configFiles: string[],
) {
  const configJoycon = new JoyCon();

  const configPath = await configJoycon.resolve(
    configFiles,
    cwd,
    path.parse(cwd).root
  );

  if (configPath) {
    const config = await bundleRequire({
      filepath: configPath,
    })

    return {
      path: configPath,
      data: config.mod.tsup || config.mod.default || config.mod,
    }
  }

  return {};
}
