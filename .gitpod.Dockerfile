FROM gitpod/workspace-full-vnc

# Backend tools
RUN pip install --upgrade pip && pip install poetry

# Frontend tools
RUN npm install -g npm@latest pnpm@latest

# Optional: speed up Poetry
ENV POETRY_VIRTUALENVS_CREATE=false
