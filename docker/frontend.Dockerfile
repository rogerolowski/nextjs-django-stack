FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependency files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy rest of the code
COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
