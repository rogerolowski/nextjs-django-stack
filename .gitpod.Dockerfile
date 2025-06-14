FROM gitpod/workspace-full-vnc

# Backend tools
RUN pip install --upgrade pip && pip install poetry

# Frontend tools
RUN npm install -g npm@latest pnpm@latest

# Optional: speed up Poetry
ENV POETRY_VIRTUALENVS_CREATE=false

# Ensure pnpm store path is consistent in Gitpod
ENV PNPM_STORE_PATH=/workspace/.pnpm-store
