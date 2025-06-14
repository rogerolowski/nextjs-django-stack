FROM node:20

WORKDIR /app

# Use Corepack to enable PNPM
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

# ✅ Fix for Gitpod-pnpm store mismatch
ENV PNPM_STORE_PATH=/workspace/.pnpm-store

# Copy lockfile and package.json first to cache layers
COPY package.json pnpm-lock.yaml ./

