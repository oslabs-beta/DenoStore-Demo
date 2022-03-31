// @ts-ignore
import { Router, Context, send } from 'https://deno.land/x/oak@v10.2.0/mod.ts';

const router = new Router();

// router.get('/', async (ctx: Context) => {
//   await send(ctx, ctx.request.url.pathname, {
//     root: `${Deno.cwd()}/src/`,
//     index: 'index.html',
//   });
// });

router.get('', (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = 'Not found';
});

export default router;
