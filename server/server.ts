// server and backend running in Deno

import { Application } from 'https://deno.land/x/oak@v10.2.0/mod.ts';
import router from './router.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

// app.use((ctx: Context) => {
//   ctx.response.body = 'server working';
// });

app.addEventListener('error', (event) => {
  console.error(event.error);
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.response.body = 'Internal server error';
    throw error;
  }
});

await app.listen({ port });
