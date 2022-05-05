import { Context } from '../deps.ts';

export const staticFileMiddleware = async (ctx: Context, next: Function) => {
  try {
    console.log(ctx.request.url.pathname);
    if (ctx.request.url.pathname === '/docs') {
      ctx.request.url.pathname = '/docs.html ';
    }
    if (
      (await fileExists(`${Deno.cwd()}/build${ctx.request.url.pathname}`)) ||
      ctx.request.url.pathname === '/'
    ) {
      await ctx.send({
        root: `${Deno.cwd()}/build`,
        index: 'index.html',
      });
    } else await next();
  } catch (err) {
    console.log(err);
    await next();
  }
};

async function fileExists(path: string) {
  try {
    const stats = await Deno.lstat(path);
    return stats && stats.isFile;
  } catch (err) {
    if (err && err instanceof Deno.errors.NotFound) {
      return false;
    } else throw err;
  }
}
