import { Router, Context } from '../deps.ts';

const router = new Router();

// https://github.com/oakserver/oak#:~:text=listen(%7B%20port%3A%208000%20%7D)%3B-,Static,-content
// random.html is just a different file than the main index.html to test that our router can serve
// other data than just our front-end index.html upon get requests

// main get request
router.get('/', async (ctx: Context, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/src`,
      index: 'random.html',
    });
  } catch {
    next();
  }
});

router.get('', (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = 'Not found';
});

export default router;
