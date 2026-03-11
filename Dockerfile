FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
CMD sh -c "sed -i 's/listen  *80;/listen '${PORT:-80}';/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
