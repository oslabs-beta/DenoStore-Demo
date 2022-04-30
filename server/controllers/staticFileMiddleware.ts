import { Context, send } from '../deps.ts';

export const staticFileMiddleware = async (ctx: Context, next: Function) => {
  try {
    // console.log('staticMW');
    let path;
    if (ctx.request.url.pathname === '/docs') {
      path = '';
    } else {
      path = ctx.request.url.pathname;
    }
    await send(ctx, path, {
      root: `${Deno.cwd()}/build`,
      index: 'index.html',
    });
  } catch (err) {
    console.log(err);
    await next();
  }
};
