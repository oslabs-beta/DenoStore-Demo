import { Application } from './deps.ts';
import { staticFileMiddleware } from './controllers/staticFileMiddleware.ts';
import router from './routes/router.ts';
import { denostore } from './routes/denostore.ts';

const port: number = Number(Deno.env.get('PORT')) || 3000;

const app = new Application();

app.use(denostore.routes(), denostore.allowedMethods());
app.use(router.routes(), router.allowedMethods());
if (Deno.env.get('DENO_ENV') === 'production') {
  app.use(staticFileMiddleware);
}



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

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
