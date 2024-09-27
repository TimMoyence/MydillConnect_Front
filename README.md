## README - Frontend

# Mydill Connect Frontend

## Table des Matières

- [Mydill Connect Frontend](#mydill-connect-frontend)
  - [Table des Matières](#table-des-matières)
  - [Introduction](#introduction)
  - [Fonctionnalités](#fonctionnalités)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
    - [Cloner le Dépôt](#cloner-le-dépôt)
    - [Installer les Dépendances](#installer-les-dépendances)
  - [Configuration](#configuration)
    - [Variables d'Environnement](#variables-denvironnement)
  - [Dépendances](#dépendances)
    - [Dépendances](#dépendances-1)
    - [Dépendances de Développement](#dépendances-de-développement)
  - [Scripts Utiles](#scripts-utiles)
    - [Scripts Utiles Frontend](#scripts-utiles-frontend)
  - [Usage](#usage)
    - [Démarrer le Serveur de Développement](#démarrer-le-serveur-de-développement)
    - [Construire pour la Production](#construire-pour-la-production)
  - [Tests](#tests)
    - [Tests Frontend](#tests-frontend)
  - [Déploiement](#déploiement)
    - [Environnement de Production](#environnement-de-production)
  - [Contribution](#contribution)
  - [Licence](#licence)
  - [Remerciements](#remerciements)

---

## Introduction

**Mydill Connect Frontend** est la partie client de l'application Mydill Connect, permettant aux utilisateurs de réserver des objets au sein des différentes écoles de l'EPSSI. Développé avec Node.js et Express.js, le frontend utilise Handlebars comme moteur de templates pour rendre les vues HTML de manière dynamique.

---

## Fonctionnalités

- **Réservation d'Objets** : Interface utilisateur pour réserver des objets disponibles.
- **Gestion des Utilisateurs** : Inscription, connexion et gestion des profils.
- **Calendrier de Disponibilité** : Visualisation en temps réel des disponibilités des objets.
- **Notifications** : Envoi de notifications par email concernant les réservations.
- **Administration** : Interface pour les administrateurs afin de gérer les objets et les réservations.
- **Sécurité** : Authentification sécurisée avec JWT et gestion des sessions.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Node.js** (version 18.x ou supérieure) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (inclus avec Node.js) ou **yarn** : [Installer npm](https://www.npmjs.com/get-npm)
- **Git** : [Installer Git](https://git-scm.com/downloads)
- **Un éditeur de code** (ex. Visual Studio Code) : [Télécharger VS Code](https://code.visualstudio.com/)

---

## Installation

### Cloner le Dépôt

Clonez le dépôt GitHub sur votre machine locale :

```bash
git clone https://github.com/TimMoyence/MydillConnect_Front
cd mydill-connect/frontend
```

### Installer les Dépendances

Installez les dépendances nécessaires :

```bash
npm install
```
---

## Configuration

### Variables d'Environnement

Créez un fichier `.env` à la racine du dossier `frontend` et ajoutez-y les variables d'environnement nécessaires :

```env
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

Assurez-vous de remplacer les valeurs par vos propres clés et URLs.

---

## Dépendances

### Dépendances

Les dépendances nécessaires pour le frontend sont listées ci-dessous :

| Package                     | Version    | Description                                                                 |
|-----------------------------|------------|-----------------------------------------------------------------------------|
| `bcrypt`                    | ^5.1.1     | Bibliothèque pour le hachage des mots de passe.                            |
| `connect-pg-simple`         | ^9.0.1     | Stockage des sessions Express dans une base de données PostgreSQL.        |
| `cookie-parser`             | ^1.4.6     | Middleware pour parser les cookies dans les requêtes HTTP.                 |
| `cors`                      | ^2.8.5     | Middleware pour activer CORS (Cross-Origin Resource Sharing).              |
| `debug`                     | ^4.3.4     | Outils de débogage pour Node.js.                                           |
| `dotenv`                    | ^16.3.1    | Chargement des variables d'environnement depuis un fichier `.env`.        |
| `express`                   | ^4.18.2    | Framework web minimal et flexible pour Node.js.                            |
| `express-jsdoc-swagger`     | ^1.8.0     | Génération de documentation Swagger à partir de JSDoc.                     |
| `express-session`           | ^1.17.3    | Gestion des sessions utilisateur avec Express.                             |
| `handlebars`                | ^4.7.8     | Moteur de template pour générer des vues HTML.                             |
| `joi`                       | ^17.10.2    | Validation des schémas de données.                                         |
| `jsonwebtoken`              | ^9.0.2     | Génération et vérification des JSON Web Tokens (JWT).                       |
| `multer`                    | ^1.4.5-lts.1| Middleware pour gérer les uploads de fichiers.                              |
| `nodemailer`                | ^6.9.7     | Envoi d'e-mails depuis Node.js.                                             |
| `nodemon`                   | ^3.0.1     | Redémarrage automatique du serveur lors des modifications de code.         |
| `passport`                  | ^0.6.0     | Middleware d'authentification pour Node.js.                                |
| `passport-jwt`              | ^4.0.1     | Stratégie Passport pour l'authentification via JWT.                        |
| `passport-local`            | ^1.0.0     | Stratégie Passport pour l'authentification locale (nom d'utilisateur/mot de passe). |
| `pg`                        | ^8.11.3    | Client PostgreSQL pour Node.js.                                            |
| `puppeteer`                 | ^22.3.0    | Bibliothèque pour contrôler Chrome ou Chromium via une API haut niveau.    |
| `stripe`                    | ^14.19.0   | Intégration avec l'API Stripe pour les paiements en ligne.                |
| `swagger-jsdoc`             | ^6.2.8     | Génération de documentation Swagger à partir de JSDoc.                     |
| `swagger-ui-express`        | ^5.0.0     | Middleware pour servir l'interface Swagger UI.                             |
| `winston`                   | ^3.10.0    | Bibliothèque de journalisation pour Node.js.                               |

### Dépendances de Développement

Les dépendances de développement sont nécessaires uniquement pendant le développement et les tests. Elles sont définies dans la section `devDependencies` du `package.json` :

| Package                       | Version    | Description                                                                 |
|-------------------------------|------------|-----------------------------------------------------------------------------|
| `eslint`                      | ^8.54.0    | Outil d'analyse statique pour identifier et corriger les problèmes dans le code JavaScript. |
| `eslint-config-airbnb-base`   | ^15.0.0    | Configuration ESLint basée sur les règles Airbnb pour JavaScript.          |
| `eslint-plugin-import`        | ^2.29.0    | Plugin ESLint pour gérer les imports/export dans les modules ES6.          |
| `eslint-plugin-jest`          | ^27.2.3    | Plugin ESLint pour les tests avec Jest.                                     |
| `jest`                        | ^29.7.0    | Framework de tests JavaScript.                                             |
| `babel-jest`                  | ^29.7.0    | Transformer pour Jest avec Babel.                                          |
| `@testing-library/react`      | ^14.0.0    | Outils pour tester les composants React.                                    |
| `@testing-library/jest-dom`   | ^6.0.0     | Matchers personnalisés pour Jest.                                           |

---

## Scripts Utiles

### Scripts Utiles Frontend

Les scripts définis dans le `package.json` du frontend facilitent le développement et la gestion du projet.

| Commande                     | Description                                          |
|------------------------------|------------------------------------------------------|
| `npm start`                  | Démarre l'application en mode production.            |
| `npm run dev`                | Démarre l'application en mode développement avec `nodemon`. |
| `npm run lint`               | Exécute ESLint pour analyser le code source.          |
| `npm test`                   | Exécute les tests unitaires avec Jest.               |
| `npm run build`              | Génère une version optimisée pour la production.      |
| `npm run format`             | Formate le code source selon les règles définies.     |

---

## Usage

### Démarrer le Serveur de Développement

1. **Naviguez dans le dossier `frontend` :**

   ```bash
   cd frontend
   ```

2. **Démarrez le serveur de développement :**

   ```bash
   npm run dev
   ```

3. **Ouvrez votre navigateur et accédez à :**

   ```
   http://localhost:3001
   ```

   *(Remplacez le port si nécessaire)*

### Construire pour la Production

1. **Naviguez dans le dossier `frontend` :**

   ```bash
   cd frontend
   ```

2. **Générez une version optimisée :**

   ```bash
   npm run build
   ```

3. **Déployez les fichiers générés sur votre serveur de production.**

---

## Tests

### Tests Frontend

1. **Naviguez dans le dossier `frontend` :**

   ```bash
   cd frontend
   ```

2. **Exécutez les tests :**

   ```bash
   npm test
   ```

   Les tests sont écrits avec Jest et @testing-library/react.

---

## Déploiement

### Environnement de Production

1. **Configuration des Variables d'Environnement :**

   Assurez-vous que toutes les variables d'environnement nécessaires sont définies dans l'environnement de production.

2. **Build Frontend :**

   Générez une version optimisée du frontend.

   ```bash
   npm run build
   ```

3. **Déploiement :**

   Déployez les fichiers générés (`build/`) sur votre serveur ou plateforme de cloud préférée (ex. Heroku, AWS, DigitalOcean).

4. **Configuration du Serveur :**

   Utilisez des outils comme **PM2** pour gérer le processus Node.js en production.

   ```bash
   npm install -g pm2
   pm2 start server.js
   ```

---

## Contribution

Les contributions sont les bienvenues ! Pour contribuer à ce projet, veuillez suivre les étapes ci-dessous :

1. **Fork** le dépôt.
2. **Créez une branche** pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. **Commitez vos changements** (`git commit -m 'Ajout de ma fonctionnalité'`).
4. **Poussez** vers la branche (`git push origin feature/ma-fonctionnalité`).
5. **Ouvrez une Pull Request**.

Veuillez vous assurer que votre code respecte les conventions de style définies et que tous les tests passent.

---

## Licence

Ce projet est sous licence [MIT](LICENSE).

---

## Remerciements

- Merci à l'équipe de l'EPSSI pour leur soutien et leur collaboration.
- Inspirations et ressources provenant de divers projets open-source.

