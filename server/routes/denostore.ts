//imports needed to instantiate Denostore
import { Denostore } from 'https://cdn.jsdelivr.net/gh/oslabs-beta/DenoStore/mod.ts';
import { connect } from 'https://deno.land/x/redis@v0.25.4/mod.ts';

import { typeDefs, resolvers } from './../schema.ts';

// set up redis connection
const redis = await connect({
  hostname: 'localhost',
  port: 6379,
});

//instantiate Denostore
export const denostore = new Denostore({
  schema: { typeDefs, resolvers },
  usePlayground: true,
  redisClient: redis,
});
