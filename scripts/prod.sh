#!/bin/sh
# Build et run le conteneur de production MeshOrbit Server

docker build -t meshorbit-server -f Dockerfile ..
docker run --rm -p 3000:3000 -p 6379:6379 meshorbit-server
