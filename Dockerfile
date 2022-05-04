FROM denoland/deno:1.21.0
WORKDIR /usr/
COPY server/deps.ts .
RUN deno cache deps.ts
COPY . .
RUN deno cache server/server.ts
EXPOSE 3000
ENTRYPOINT [ "deno"]
CMD [ "run", "--allow-all", "server/server.ts"] 