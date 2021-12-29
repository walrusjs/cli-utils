import { fsExtra } from '@umijs/utils';

const stat = fsExtra.promises.stat;

/**
 * 判断是否为文件
 * @param name
 */
export function isFile(name: string): Promise<boolean> {
	return stat(name)
		.then(stats => stats.isFile())
		.catch(() => false);
}
