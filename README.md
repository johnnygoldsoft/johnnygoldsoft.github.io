# 🌟 Portfolio Professionnel — Jean-Claude Sassou

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Motion-v12-FF4154?style=for-the-badge&logo=framer&logoColor=white)
![Status](https://img.shields.io/badge/Statut-En_Ligne-success?style=for-the-badge)

<br />

**Site vitrine personnel et portfolio interactif de Jean-Claude Sassou, Développeur Full-Stack & UI/UX Designer.**

[🌐 Explorer le site en direct](https://johnnygoldsoft.github.io) • [📧 Me contacter](mailto:johnnygoldsoft@gmail.com) • [💼 Profil LinkedIn](https://www.linkedin.com/in/jean-claude-sassou/)

</div>

---

## 📑 Table des Matières

- [À propos du projet](#-à-propos-du-projet)
- [✨ Fonctionnalités Clés](#-fonctionnalités-clés)
- [🛠️ Stack Technique](#️-stack-technique)
- [📂 Architecture du Projet](#-architecture-du-projet)
- [🎨 Système de Design & Tokens](#-système-de-design--tokens)
- [🚀 Installation et Lancement](#-installation-et-lancement)
- [📜 Scripts Disponibles](#-scripts-disponibles)
- [🌐 Déploiement](#-déploiement)
- [📫 Contact](#-contact)

---

## 🎯 À propos du projet

Ce projet est le portfolio officiel et interactif de **Jean-Claude Sassou**. Conçu pour présenter son expertise technique, ses réalisations, ses compétences et ses services, le site allie un design soigné, des micro-animations dynamiques et une accessibilité optimale.

### Objectifs principaux :
- **Mettre en valeur les compétences techniques** : Développement Full-Stack (Web & Mobile) et UI/UX Design.
- **Présenter les projets récents** : Applications mobiles Flutter, plateformes web Laravel/Next.js, maquettes UI/UX, etc.
- **Faciliter la prise de contact** : Formulaire de messagerie direct connecté à une API sans rechargement de page.
- **Offrir une expérience utilisateur fluide** : Animations soignées, thème sombre/clair persistant et responsive design.

---

## ✨ Fonctionnalités Clés

- 🌓 **Mode Sombre / Clair Dynamique** : Basculement instantané avec détection automatique des préférences du système et persistance dans le `localStorage`.
- ⚡ **Animations Modernes & Fluides** : Intégration de `Motion` (Framer Motion) pour des entrées progressives, des effets de survol et des animations au défilement (*scroll reveal*).
- 📱 **Responsive Design Complet** : Interface adaptative optimisée pour smartphones, tablettes et grands écrans.
- 📬 **Formulaire de Contact Connecté** : Envoi de messages asynchrone via l'API [Web3Forms](https://web3forms.com/) avec retour visuel d'état (chargement, succès, erreur).
- 🧩 **Composants Modulaires** : Architecture de composants UI réutilisables (Boutons, Badges, Cartes de projets, Titres de sections) inspirée par la philosophie *shadcn/ui*.
- ⚡ **Performances Optimales** : Construit avec **Next.js 15** et le compilateur **Turbopack** pour un chargement ultra-rapide.

---

## 🛠️ Stack Technique

### Frontend & Frameworks
| Technologie | Description |
| :--- | :--- |
| **[Next.js 15](https://nextjs.org/)** | Framework React avec App Router et support Turbopack |
| **[React 19](https://react.dev/)** | Bibliothèque d'interfaces utilisateur moderne |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Moteur de styles utilitaire moderne haute performance |
| **[Motion (Framer)](https://motion.dev/)** | Bibliothèque d'animations interactives et transitions fluides |
| **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** | Gestion conditionnelle et fusion propre des classes CSS |

### Services & Outils Externes
- **Web3Forms API** : Traitement et acheminement direct des emails depuis le formulaire de contact.
- **PostCSS & Autoprefixer** : Compilation et préfixes CSS optimisés.
- **ESLint** : Analyse statique et qualité du code source.

---

## 📂 Architecture du Projet

```plaintext
johnnygoldsoft.github.io/
├── assets/                    # Ressources multimédias, icônes et données statiques
│   ├── assets.js              # Export centralisé des images, icônes et jeux de données (projets, services)
│   └── public/work/           # Captures d'écran et visuels des projets réalisés
├── public/                    # Fichiers statiques servis à la racine
├── src/
│   ├── app/                   # App Router Next.js
│   │   ├── components/        # Sections principales de la page d'accueil
│   │   │   ├── Header.jsx     # Section Hero avec présentation et animations d'entrée
│   │   │   ├── Navbar.jsx     # Barre de navigation avec bascule Dark Mode et menu mobile
│   │   │   ├── About.jsx      # Section À propos, parcours, outils et compétences
│   │   │   ├── Services.jsx   # Grille des services proposés
│   │   │   ├── Work.jsx       # Galerie des projets réalisés avec filtres et cartes
│   │   │   ├── Contact.jsx    # Formulaire de contact interactif
│   │   │   ├── Footer.jsx     # Pied de page avec liens sociaux et mentions
│   │   │   └── Loader.jsx     # Indicateur de chargement
│   │   ├── globals.css        # Directives Tailwind CSS et styles globaux
│   │   ├── layout.js          # Gabarit principal de l'application
│   │   └── page.js            # Point d'entrée principal (assemblage des sections et gestion du thème)
│   ├── components/            # Système de composants partagés
│   │   ├── common/            # Composants composites (SectionTitle, ProjectCard, ServiceCard)
│   │   └── ui/                # Composants atomiques (Button, Card, Badge)
│   └── lib/                   # Fonctions utilitaires et constantes
│       ├── cn.js              # Fonction utilitaire de fusion des classes Tailwind
│       └── constants.js       # Tokens de design (typographie, espacements, palettes de couleurs)
├── next.config.js             # Configuration Next.js
├── postcss.config.mjs         # Configuration PostCSS
├── package.json               # Dépendances et scripts du projet
└── README.md                  # Documentation du projet
```

---

## 🎨 Système de Design & Tokens

Le projet implémente une charte graphique définie dans [`src/lib/constants.js`](file:///c:/Users/DELL/Documents/projet/web/johnnygoldsoft.github.io/src/lib/constants.js) :

- **Couleurs principales** :
  - `Primary` : `#0066FF` (Bleu électrique moderne)
  - `Secondary` : `#9333EA` (Violet dynamique)
  - `Accent` : `#00D9A3` (Vert menthe)
- **Typographie** : Échelle modulaire responsive.
- **Composants UI** :
  - [`Button`](file:///c:/Users/DELL/Documents/projet/web/johnnygoldsoft.github.io/src/components/ui/Button.jsx) : Prise en charge des variantes (primary, secondary, outline, ghost), des tailles et des états de chargement.
  - [`Card`](file:///c:/Users/DELL/Documents/projet/web/johnnygoldsoft.github.io/src/components/ui/Card.jsx) : Effets de profondeur et bordures adaptatives au thème.
  - [`Badge`](file:///c:/Users/DELL/Documents/projet/web/johnnygoldsoft.github.io/src/components/ui/Badge.jsx) : Étiquettes de compétences et statuts de projets.

---

## 🚀 Installation et Lancement

### Prérequis
- [Node.js](https://nodejs.org/) (version 18.17 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Étapes d'installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/johnnygoldsoft/johnnygoldsoft.github.io.git
   cd johnnygoldsoft.github.io
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```

4. **Accéder à l'application :**
   Ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts Disponibles

Dans le fichier `package.json`, vous disposez des commandes suivantes :

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Démarre le serveur local avec Turbopack pour un rechargement instantané |
| `npm run build` | Compile et optimise l'application pour le déploiement en production |
| `npm run start` | Lance le serveur Next.js en mode production |
| `npm run lint` | Exécute ESLint pour vérifier la conformité et la qualité du code |

---

## 🌐 Déploiement

Le site est conçu pour être facilement déployé sur :
- **GitHub Pages** (nom de domaine configuré pour `johnnygoldsoft.github.io`)
- **[Vercel](https://vercel.com/)** (recommandé pour une prise en charge native de Next.js)
- **Netlify** ou tout hébergeur statique compatible Next.js export.

---

## 📫 Contact

- **Auteur** : Jean-Claude Sassou
- **Email** : [johnnygoldsoft@gmail.com](mailto:johnnygoldsoft@gmail.com)
- **LinkedIn** : [Jean-Claude Sassou](https://www.linkedin.com/in/jean-claude-sassou/)
- **GitHub** : [@johnnygoldsoft](https://github.com/johnnygoldsoft)

---

<div align="center">
  <sub>Développé avec passion par Jean-Claude Sassou • &copy; 2025 Tous droits réservés.</sub>
</div>
