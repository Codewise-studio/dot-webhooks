FROM oven/bun:1-slim

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY index.ts ./
COPY emails ./emails
COPY certs ./certs

ENV NODE_ENV=production
EXPOSE 3000

USER bun
CMD ["bun", "index.ts"]
