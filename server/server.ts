// server and backend running in Deno
import { Application } from 'https://deno.land/x/oak/mod.ts';

// import { FsFile } from 'https://deno.land/x/oak@v10.5.1/send.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = 'Hello world';
});

await app.listen({ port: 8000 });
