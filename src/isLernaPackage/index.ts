import { existsSync } from 'fs-extra';
import { join } from 'path';

export function isLernaPackage(root: string) {
  return existsSync(join(root, 'lerna.json'));
}
