FROM node:20

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# ✅ Fix for Gitpod-pnpm store mismatch
ENV PNPM_STORE_PATH=/workspace/.pnpm-store

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
