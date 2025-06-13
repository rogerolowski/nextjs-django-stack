FROM gitpod/workspace-full-vnc
RUN pip install pipenv && npm install -g npm@latest pnpm@latest
