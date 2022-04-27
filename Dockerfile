FROM denoland/deno:1.20.6
WORKDIR /usr/
USER deno
COPY server/deps.ts .
RUN deno cache deps.ts
COPY . .
RUN deno cache server/server.ts
EXPOSE 3000
EXPOSE 6379
ENTRYPOINT [ "deno"]
CMD [ "run", "--allow-all", "server/server.ts"] 