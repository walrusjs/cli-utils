import path from 'path';
import { fsExtra } from '@umijs/utils';
import { jsonParse } from '@walrus/bundle-require';

export function readPackage(cwd = process.cwd()) {
	const filePath = path.resolve(cwd, 'package.json');

  if (fsExtra.existsSync(filePath)) {
    const contents = fsExtra.readFileSync(filePath, 'utf8');

    return {
      data: jsonParse(contents),
      path: filePath
    }
  }

  return {}
}
