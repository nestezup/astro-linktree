FROM node:lts-alpine AS base
WORKDIR /app

FROM base AS prod-deps
COPY package.json package-lock.json* ./
RUN npm ci --only=production

FROM base AS build-deps
COPY package.json package-lock.json* ./
RUN npm ci

FROM build-deps AS build
COPY . .
RUN npm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=${PORT:-80}
EXPOSE ${PORT:-80}

CMD ["node", "./dist/server/entry.mjs"]
