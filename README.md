
# MeshOrbit Server

Système de découverte d’API en temps réel pour un écosystème de données.

## Pitch & Architecture

MeshOrbit est un projet multi-répo composé d’un serveur et d’un client. Ce dépôt correspond à la partie serveur.

- **Client** : S’inscrit auprès du serveur pour accéder à des services, interroger les services, reçoit des notifications de disponibilité, et ses requêtes sont mises en attente si le service est indisponible.
- **Serveur** : Découvre dynamiquement les services via une route API dédiée, gère l’état des services, informe les clients en temps réel, et met en file d’attente les requêtes si besoin.

### Points clés
- Communication temps réel (WebSocket ou équivalent)
- Découverte automatique des services
- Gestion intelligente de la disponibilité et des requêtes en attente
- Architecture modulaire (séparation client/serveur)

## Démarrage rapide

### Production
```sh
./scripts/prod.sh
```

### Développement
```sh
./scripts/dev.sh
```

> Pensez à rendre les scripts exécutables :
> ```sh
> chmod +x scripts/dev.sh scripts/prod.sh
> ```

## Prérequis
- Docker
- Node.js >= 24

## Structure
- `Dockerfile` : build et lance le serveur en mode production avec Redis
- `Dockerfile.dev` : build et lance le serveur en mode développement (hot-reload) avec Redis
- `scripts/` : scripts pour builder et lancer les conteneurs

## À venir
- Documentation API
- Exemples d’intégration client
- Tests et CI

---

Pour toute contribution, voir `.github/copilot-instructions.md`.
# e2e tests
