# Dockerfile pour MeshOrbit Server (NestJS) + Redis
FROM node:24-alpine

# Installation de Redis
RUN apk add --no-cache redis

# Création du dossier de l'app
WORKDIR /app

# Copie des fichiers package*
COPY package*.json ./

# Installation des dépendances
RUN npm install --production

# Copie du code source
COPY . .

# Exposition des ports
EXPOSE 3000 6379

# Commande pour lancer Redis et le serveur NestJS
CMD redis-server & npm run start:prod
