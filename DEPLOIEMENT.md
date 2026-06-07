# Guide de Déploiement — Portfolio Jean Claude SASSOU

## Prérequis
- Node.js 18+ installé
- Compte GitHub
- Compte Supabase (gratuit) → supabase.com
- Compte Vercel (gratuit) → vercel.com
- Compte Resend (gratuit) → resend.com

---

## ÉTAPE 1 — Supabase : Créer le projet

1. Aller sur **supabase.com** → "New project"
2. Choisir un nom (ex: `portfolio-jcs`) et un mot de passe fort
3. Choisir la région **EU West** (Frankfurt) pour la latence
4. Attendre ~2 minutes que le projet démarre

### 1.1 — Créer les tables

1. Dans Supabase → **SQL Editor** → "New query"
2. Copier-coller tout le contenu du fichier `supabase-schema.sql`
3. Cliquer **Run** (▶)
4. Vérifier que toutes les tables apparaissent dans **Table Editor**

### 1.2 — Créer le bucket Storage

1. Dans Supabase → **Storage** → "New bucket"
2. Nom : `portfolio`
3. Cocher **Public bucket**
4. Cliquer "Save"
5. Créer les dossiers : `projects/`, `skills/`, `about/`, `blog/`, `shop/`

### 1.3 — Créer le compte admin

1. Dans Supabase → **Authentication** → "Add user"
2. Saisir ton email et un mot de passe fort (12+ caractères, majuscule + chiffre + symbole)
3. Cocher "Auto confirm user"
4. Cliquer "Create user"
5. ⚠️ Note bien cet email et mot de passe — c'est ton accès admin

### 1.4 — Récupérer les clés API

1. Dans Supabase → **Settings** → **API**
2. Copier :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** (secret!) → `SUPABASE_SERVICE_ROLE_KEY`

---

## ÉTAPE 2 — Resend : Email de contact

1. Aller sur **resend.com** → "Get started"
2. Créer un compte
3. **API Keys** → "Create API key"
4. Copier la clé → `RESEND_API_KEY`
5. **Domains** → Ajouter ton domaine (ou utiliser `onboarding@resend.dev` en test)
6. Remplir `CONTACT_EMAIL` avec ton email de réception

---

## ÉTAPE 3 — Google Analytics 4

1. Aller sur **analytics.google.com**
2. "Créer une propriété" → Renseigner ton site
3. **Admin** → **Flux de données** → "Ajouter un flux" → Web
4. Saisir l'URL de ton site
5. Copier l'**ID de mesure** (format `G-XXXXXXXXXX`) → `NEXT_PUBLIC_GA_ID`

---

## ÉTAPE 4 — GitHub : Pousser le code

```bash
# Dans le dossier du projet
cd portfolio

# Initialiser Git
git init
git add .
git commit -m "feat: portfolio initial — Jean Claude SASSOU"

# Créer un repo sur github.com (bouton + > New repository)
# Nom : portfolio
# Visibilité : Private (recommandé)

# Connecter et pousser
git remote add origin https://github.com/TON_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## ÉTAPE 5 — Vercel : Déploiement

1. Aller sur **vercel.com** → "Add New Project"
2. Cliquer "Import" sur ton repo GitHub `portfolio`
3. Framework : **Next.js** (auto-détecté)
4. Root Directory : laisser `/`

### 5.1 — Variables d'environnement

Dans Vercel → **Environment Variables**, ajouter :

| Nom | Valeur | Environnement |
|-----|--------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | https://xxx.supabase.co | All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | eyJ... | All |
| `SUPABASE_SERVICE_ROLE_KEY` | eyJ... | Production, Preview |
| `RESEND_API_KEY` | re_... | Production, Preview |
| `CONTACT_EMAIL` | ton@email.com | All |
| `NEXT_PUBLIC_GA_ID` | G-XXXXXXXXXX | Production |
| `NEXT_PUBLIC_APP_URL` | https://johnnygoldsoft.dev | Production |

5. Cliquer **Deploy**
6. Attendre ~2 minutes → ton site est en ligne ! 🎉

---

## ÉTAPE 6 — Domaine personnalisé

1. Dans Vercel → **Settings** → **Domains**
2. Ajouter `johnnygoldsoft.dev`
3. Vercel te donne 2 enregistrements DNS à configurer chez ton registrar :
   - **A record** : `@` → `76.76.21.21`
   - **CNAME** : `www` → `cname.vercel-dns.com`
4. Attendre 5-30 min pour la propagation DNS
5. HTTPS est automatiquement activé ✓

---

## ÉTAPE 7 — Google Search Console

1. Aller sur **search.google.com/search-console**
2. "Ajouter une propriété" → Saisir `https://johnnygoldsoft.dev`
3. Vérifier la propriété (méthode HTML tag dans `layout.tsx` ou DNS)
4. **Sitemaps** → Soumettre `https://johnnygoldsoft.dev/sitemap.xml`
5. Attendre l'indexation (2-7 jours)

---

## ÉTAPE 8 — Accès Admin

Après déploiement :
1. Aller sur `https://johnnygoldsoft.dev/fr/admin/login`
2. Se connecter avec l'email/mot de passe créé à l'étape 1.3
3. Commencer à remplir le contenu :
   - **À propos** → Bio, photo, CV
   - **Projets** → Créer tes premiers projets
   - **Compétences** → Ajuster les niveaux
   - **Services** → Vérifier les prestations (pré-remplies)
   - **Témoignages** → Ajouter les avis clients

---

## Développement local

```bash
# Cloner le projet
git clone https://github.com/TON_USERNAME/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Copier et remplir les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec tes vraies clés

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

---

## Déploiements suivants (automatique)

Tout push sur la branche `main` déclenche un nouveau déploiement automatiquement sur Vercel.

```bash
# Modifier du code, puis :
git add .
git commit -m "feat: ajouter nouvelle section"
git push

# → Vercel déploie automatiquement en ~1 minute
```

---

## Checklist sécurité finale

- [ ] `.env.local` absent du repo Git (vérifié dans `.gitignore`)
- [ ] Clé `SUPABASE_SERVICE_ROLE_KEY` absente du bundle client
- [ ] RLS activé sur toutes les tables Supabase
- [ ] Route `/admin` inaccessible sans session (tester en mode navigation privée)
- [ ] HTTPS actif sur le domaine
- [ ] Headers de sécurité vérifiés sur **securityheaders.com**
- [ ] Score Lighthouse **Performance** > 90, **Best Practices** > 90
- [ ] `npm audit` : aucune vulnérabilité critique

---

## Structure du projet rappel

```
portfolio/
├── src/
│   ├── app/[locale]/      → Pages Next.js par langue
│   ├── features/          → Logique métier (actions, queries, schemas)
│   ├── widgets/           → Sections composées réutilisables
│   └── shared/            → Utils, UI, hooks, constantes
├── messages/
│   ├── fr.json            → Traductions françaises
│   └── en.json            → Traductions anglaises
├── supabase-schema.sql    → Script SQL à exécuter dans Supabase
├── .env.example           → Template des variables d'environnement
└── DEPLOIEMENT.md         → Ce fichier
```

---

*Projet créé avec Next.js 16 · Supabase · shadcn/ui · next-intl · Vercel*
