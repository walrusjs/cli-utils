import { existsSync } from 'fs';
import { join } from 'path';

export function isLernaPackage(root: string) {
  return existsSync(join(root, 'lerna.json'));
}
