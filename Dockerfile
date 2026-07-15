# canary: local bun 1.4 writes lockfile v2, unsupported by bun 1.3 images
FROM oven/bun:canary-slim

# ISRG gen-y roots — not yet in the Node/Bun CA bundle
ADD https://letsencrypt.org/certs/gen-y/root-yr.pem /etc/ssl/le/root-yr.pem
ADD https://letsencrypt.org/certs/gen-y/root-ye.pem /etc/ssl/le/root-ye.pem
ADD https://letsencrypt.org/certs/gen-y/int-yr1.pem /etc/ssl/le/int-yr1.pem
ADD https://letsencrypt.org/certs/gen-y/int-yr2.pem /etc/ssl/le/int-yr2.pem
RUN cat /etc/ssl/le/*.pem > /etc/ssl/le-roots.pem && chmod 644 /etc/ssl/le-roots.pem
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/le-roots.pem

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY index.ts ./
COPY emails ./emails

ENV NODE_ENV=production
EXPOSE 3000

USER bun
CMD ["bun", "index.ts"]
