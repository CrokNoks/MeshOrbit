# Instructions pour les agents IA sur MeshOrbit

Bienvenue sur le projet MeshOrbit. Ce guide vise à rendre les agents IA immédiatement productifs en documentant les conventions, workflows et architecture spécifiques à ce codebase.

## Vue d'ensemble du projet

## Workflows critiques


## Pitch et architecture du projet MeshOrbit (MeshOrbit Server)

**Nom du projet** : MeshOrbit

**Contexte multi-répo** : Ce dépôt correspond à la partie serveur du projet MeshOrbit. D’autres dépôts pourront compléter l’écosystème (ex : client).

**Objectif** :
Développer un système de découverte d’API dans un écosystème de données, composé de deux parties communicant en temps réel : un client et un serveur.

### Fonctionnement

- **Client**
	- S’inscrit auprès du serveur pour accéder à des services et interroger ces services.
	- Reçoit des notifications du serveur dès qu’un service devient indisponible.
	- Les requêtes vers un service indisponible sont mises en attente jusqu’à ce que le service soit de nouveau disponible.

- **Serveur**
	- Découvre dynamiquement les services via une route API dédiée.
	- Gère l’état des services et informe les clients en temps réel des changements de disponibilité.
	- Met en file d’attente les requêtes des clients si le service ciblé est temporairement indisponible.

### Points clés

- Communication temps réel entre client et serveur (WebSocket ou équivalent).
- Découverte automatique des services côté serveur.
- Gestion intelligente de la disponibilité des services et des requêtes en attente.
- Architecture modulaire : séparation claire client/serveur.

- **Build & tests** : Aucun workflow de build ou de test détecté. Dès qu'un fichier de configuration (`package.json`, `Makefile`, `pyproject.toml`, etc.) ou script apparaît, ajoutez les commandes principales ici.
## Conventions et patterns
- **Nomination** : Respectez les conventions de nommage explicites dans le projet. Documentez toute règle spécifique ici.
- **Organisation** : Si des patterns d'organisation (modulaire, microservices, etc.) sont adoptés, décrivez-les avec des exemples de fichiers/dossiers.
- **Intégrations** : Listez les dépendances externes et points d'intégration dès qu'ils sont identifiés (API, bases de données, services tiers).

## Exemples à suivre
- Ajoutez des exemples de code ou de structure dès qu'ils sont disponibles pour illustrer les bonnes pratiques propres à MeshOrbit.

## Mise à jour
- Ce fichier doit être mis à jour à chaque évolution structurante du projet.
- Fusionnez intelligemment les instructions existantes avec les nouvelles conventions.

---

> **Note** : Ce guide est initialisé car aucun fichier de convention ou documentation n'a été trouvé. Veuillez enrichir ce fichier au fur et à mesure de la croissance du projet.
