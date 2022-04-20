// server and backend running in Deno

import { Application } from 'https://deno.land/x/oak@v10.2.0/mod.ts';
import { connect } from "https://deno.land/x/redis/mod.ts";

//imports needed to instantiate Denostore
import { Denostore } from 'https://cdn.jsdelivr.net/gh/oslabs-beta/DenoStore/mod.ts';
import { typeDefs, resolvers } from './schema.ts';


import router from './router.ts';

const app = new Application();

// set up redis connection
const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379,
});

//instantiate Denostore
const denostore = new Denostore({schema: {typeDefs, resolvers}, usePlayground: true, redisClient: redis});

app.use(router.routes());
app.use(router.allowedMethods());

app.use (denostore.routes(), denostore.allowedMethods());


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





