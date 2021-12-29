import { fsExtra } from '@umijs/utils';
import { join } from 'path';

export function isLernaPackage(root: string) {
  return fsExtra.existsSync(join(root, 'lerna.json'));
}
