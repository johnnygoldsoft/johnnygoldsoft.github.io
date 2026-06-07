-- ============================================================
-- PORTFOLIO SCHEMA — Supabase PostgreSQL
-- Jean Claude SASSOU — johnnygoldsoft.dev
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─────────────────────────────────────────────────────────────
-- TABLE: about
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS about (
  id          INTEGER PRIMARY KEY DEFAULT 1,
  bio_short_fr TEXT NOT NULL DEFAULT '',
  bio_short_en TEXT NOT NULL DEFAULT '',
  bio_long_fr  TEXT NOT NULL DEFAULT '',
  bio_long_en  TEXT NOT NULL DEFAULT '',
  photo_url    TEXT,
  cv_url       TEXT,
  social_links JSONB DEFAULT '{"github":"","linkedin":"","twitter":"","whatsapp":""}',
  updated_at   TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- TABLE: projects
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_fr      TEXT NOT NULL,
  title_en      TEXT NOT NULL,
  slug          TEXT UNIQUE,
  description_fr TEXT NOT NULL DEFAULT '',
  description_en TEXT NOT NULL DEFAULT '',
  tech_stack    TEXT[] DEFAULT '{}',
  image_url     TEXT,
  github_url    TEXT,
  live_url      TEXT,
  order_index   INTEGER DEFAULT 0,
  published     BOOLEAN DEFAULT false,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- TABLE: skills
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS skills (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_fr     TEXT NOT NULL,
  name_en     TEXT NOT NULL,
  category    TEXT NOT NULL CHECK (category IN ('dev','design','mobile','network','tools','soft')),
  level       INTEGER DEFAULT 80 CHECK (level >= 0 AND level <= 100),
  icon_url    TEXT,
  order_index INTEGER DEFAULT 0,
  visible     BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- TABLE: experiences
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS experiences (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role_fr        TEXT NOT NULL,
  role_en        TEXT NOT NULL,
  company        TEXT NOT NULL,
  location       TEXT,
  start_date     TEXT NOT NULL,
  end_date       TEXT,
  description_fr TEXT,
  description_en TEXT,
  logo_url       TEXT,
  type           TEXT CHECK (type IN ('cdi','cdd','freelance','volunteer','internship')),
  created_at     TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- TABLE: services
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS services (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_fr       TEXT NOT NULL,
  title_en       TEXT NOT NULL,
  description_fr TEXT NOT NULL DEFAULT '',
  description_en TEXT NOT NULL DEFAULT '',
  price_info     TEXT,
  icon_url       TEXT,
  order_index    INTEGER DEFAULT 0,
  active         BOOLEAN DEFAULT true,
  created_at     TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- TABLE: testimonials
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS testimonials (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  role        TEXT,
  company     TEXT,
  logo_url    TEXT,
  photo_url   TEXT,
  quote_fr    TEXT NOT NULL,
  quote_en    TEXT NOT NULL,
  rating      INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  visible     BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- TABLE: categories (boutique)
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS categories (
  id        UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_fr   TEXT NOT NULL,
  name_en   TEXT NOT NULL,
  slug      TEXT UNIQUE NOT NULL,
  cover_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- TABLE: products
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_fr        TEXT NOT NULL,
  name_en        TEXT NOT NULL,
  description_fr TEXT NOT NULL DEFAULT '',
  description_en TEXT NOT NULL DEFAULT '',
  price_info     TEXT,
  buy_url        TEXT NOT NULL,
  image_url      TEXT,
  category_id    UUID REFERENCES categories(id) ON DELETE SET NULL,
  published      BOOLEAN DEFAULT false,
  created_at     TIMESTAMPTZ DEFAULT now(),
  updated_at     TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- TABLE: articles
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS articles (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_fr     TEXT NOT NULL,
  title_en     TEXT NOT NULL,
  slug         TEXT UNIQUE NOT NULL,
  content_fr   TEXT NOT NULL DEFAULT '',
  content_en   TEXT NOT NULL DEFAULT '',
  excerpt_fr   TEXT,
  excerpt_en   TEXT,
  cover_url    TEXT,
  tags         TEXT[] DEFAULT '{}',
  published    BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT now(),
  updated_at   TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- ROW LEVEL SECURITY (OWASP A01 — Broken Access Control)
-- ============================================================

ALTER TABLE about         ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects      ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills        ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences   ENABLE ROW LEVEL SECURITY;
ALTER TABLE services      ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials  ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories    ENABLE ROW LEVEL SECURITY;
ALTER TABLE products      ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles      ENABLE ROW LEVEL SECURITY;

-- Lecture publique pour tous
CREATE POLICY "public_read_about"        ON about        FOR SELECT USING (true);
CREATE POLICY "public_read_projects"     ON projects     FOR SELECT USING (published = true);
CREATE POLICY "public_read_skills"       ON skills       FOR SELECT USING (visible = true);
CREATE POLICY "public_read_experiences"  ON experiences  FOR SELECT USING (true);
CREATE POLICY "public_read_services"     ON services     FOR SELECT USING (active = true);
CREATE POLICY "public_read_testimonials" ON testimonials FOR SELECT USING (visible = true);
CREATE POLICY "public_read_categories"   ON categories   FOR SELECT USING (true);
CREATE POLICY "public_read_products"     ON products     FOR SELECT USING (published = true);
CREATE POLICY "public_read_articles"     ON articles     FOR SELECT USING (published = true);

-- Écriture réservée aux utilisateurs authentifiés (admin uniquement)
CREATE POLICY "admin_all_about"        ON about        FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_projects"     ON projects     FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_skills"       ON skills       FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_experiences"  ON experiences  FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_services"     ON services     FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_categories"   ON categories   FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_products"     ON products     FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_articles"     ON articles     FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================
-- SEED DATA — Données de départ
-- ============================================================

INSERT INTO about (id, bio_short_fr, bio_short_en, bio_long_fr, bio_long_en)
VALUES (1,
  'Développeur Web & Mobile basé à Lomé, Togo. Passionné par la création d''expériences numériques sur mesure.',
  'Web & Mobile Developer based in Lomé, Togo. Passionate about crafting tailored digital experiences.',
  'Je suis Jean Claude SASSOU, développeur Web & Mobile avec plusieurs années d''expérience dans la création de sites WordPress, d''applications Flutter et React. Basé à Lomé au Togo, je travaille avec des clients locaux et internationaux pour donner vie à leurs projets digitaux.',
  'I am Jean Claude SASSOU, a Web & Mobile Developer with several years of experience building WordPress websites, Flutter and React applications. Based in Lomé, Togo, I work with local and international clients to bring their digital projects to life.'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO skills (name_fr, name_en, category, level) VALUES
  ('WordPress', 'WordPress', 'dev', 90),
  ('React / Next.js', 'React / Next.js', 'dev', 80),
  ('Flutter', 'Flutter', 'mobile', 85),
  ('TypeScript', 'TypeScript', 'dev', 75),
  ('Figma', 'Figma', 'design', 85),
  ('Photoshop', 'Photoshop', 'design', 80),
  ('Canva', 'Canva', 'design', 90),
  ('Cisco Networking', 'Cisco Networking', 'network', 75),
  ('Community Management', 'Community Management', 'soft', 90),
  ('Git / GitHub', 'Git / GitHub', 'tools', 80);

INSERT INTO services (title_fr, title_en, description_fr, description_en, price_info, order_index) VALUES
  ('Création de site WordPress', 'WordPress Website Creation', 
   'Sites vitrines, e-commerce ou portfolio avec WordPress et Elementor. Design professionnel, responsive et optimisé SEO.',
   'Showcase sites, e-commerce or portfolio with WordPress and Elementor. Professional, responsive and SEO-optimized design.',
   'À partir de 150 000 FCFA', 1),
  ('Développement Flutter', 'Flutter Development',
   'Applications mobiles multiplateformes (iOS & Android) avec Flutter. UX soignée et performances natives.',
   'Cross-platform mobile applications (iOS & Android) with Flutter. Polished UX and native performance.',
   'Sur devis', 2),
  ('Développement React / Next.js', 'React / Next.js Development',
   'Applications web modernes avec React et Next.js. SSR, performances optimales et SEO natif.',
   'Modern web applications with React and Next.js. SSR, optimal performance and native SEO.',
   'Sur devis', 3),
  ('Community Management', 'Community Management',
   'Gestion de vos réseaux sociaux, création de contenu et stratégie digitale pour développer votre audience.',
   'Social media management, content creation and digital strategy to grow your audience.',
   'À partir de 50 000 FCFA / mois', 4);

-- ─────────────────────────────────────────────────────────────
-- TABLE: quote_requests (Demandes de devis)
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS quote_requests (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  service_id  UUID REFERENCES services(id) ON DELETE SET NULL,
  service_name TEXT,
  message     TEXT NOT NULL,
  budget      TEXT,
  status      TEXT DEFAULT 'new' CHECK (status IN ('new','read','replied','closed')),
  created_at  TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
-- Insertion publique autorisée (formulaire de contact)
CREATE POLICY "public_insert_quotes" ON quote_requests FOR INSERT WITH CHECK (true);
-- Lecture réservée à l'admin
CREATE POLICY "admin_read_quotes" ON quote_requests FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "admin_update_quotes" ON quote_requests FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "admin_delete_quotes" ON quote_requests FOR DELETE USING (auth.role() = 'authenticated');
