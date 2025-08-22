FROM node:20-alpine

WORKDIR /app

# Install deps first (better layer cache)
COPY package*.json ./
RUN npm ci

# Prisma schema + generate client
COPY prisma ./prisma
RUN npx prisma generate

# App source
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

# In container, Prisma must connect to 'mysql' host (service name), not localhost
# We'll pass DATABASE_URL via compose. On start, run migrations then start server.
CMD npx prisma migrate deploy && node dist/index.js
