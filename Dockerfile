FROM denoland/deno:alpine
WORKDIR /usr/
USER deno
COPY server/deps.ts .
RUN deno cache deps.ts
COPY . .
RUN deno cache server/server.ts
EXPOSE 3000
ENTRYPOINT [ "deno"]
CMD [ "run", "--allow-all", "server/server.ts"] 