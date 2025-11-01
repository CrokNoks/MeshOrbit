#!/bin/sh
# Build et run le conteneur de développement MeshOrbit Server

cd "$(dirname "$0")/.."
docker build -t meshorbit-server-dev -f Dockerfile.dev .
docker run --rm -p 3000:3000 -p 6379:6379 -v "$(pwd)":/app meshorbit-server-dev