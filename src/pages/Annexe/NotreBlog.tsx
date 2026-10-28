import { useState } from 'react';
import { ArrowRight, Calendar, ChevronRight, Clock, RefreshCw, Search } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageLink from '../../components/PageLink';
import RichText, { extractHeadings, headingId } from '../../components/RichText';
import {
  ARTICLE_CATEGORIES,
  blogArticles,
  findArticleBySlug,
  relatedArticles,
  articleIsoDate,
} from '../../data/blogArticles';
import type { BlogArticle } from '../../data/blogArticles';
import { getArticleContent, readTime } from '../../data/articleContent';
import { HIGH_PRIORITY } from '../../lib/images';
import { PAGE_META, articleUrl } from '../../seo/routes';

/** Guides pratiques publiés comme pages à part entière. */
const PRACTICAL_GUIDES = [
  'prix-panneaux-solaires',
  'installation-panneaux-solaires',
  'fonctionnement-panneau-solaire',
  'fonctionnement-pac-air-eau',
  'installation-pac-air-eau',
  'prix-chauffe-eau-thermodynamique',
  'rentabilite-chauffe-eau-thermodynamique',
  'prix-isolation-exterieure',
  'cee-isolation-exterieure',
  'passoires-thermiques',
  'tout-savoir-renovation-energetique',
];

const guideLabel = (key: string) => (PAGE_META[key]?.title ?? key).split(' | ')[0];

const formatDate = (date: string) => {
  const [day, month, year] = date.split('/').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
};

interface NotreBlogProps {
  onPageChange: (page: string) => void;
  /** Identifiant (slug) de l'article ouvert, issu de l'URL. */
  currentSlug?: string | null;
  /** Conservé pour compatibilité : la navigation passe désormais par des liens. */
  onArticleChange?: (slug: string | null) => void;
}

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
      <a href={articleUrl(article.slug)} className="flex flex-col h-full">
        <div className="relative overflow-hidden">
          <img
            src={article.image}
            alt=""
            loading="lazy"
            decoding="async"
            width={800}
            height={400}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
          <div className="mt-auto flex items-center justify-between text-gray-500 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime={articleIsoDate(article.updated ?? article.date)}>
                  {article.updated ?? article.date}
                </time>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {readTime(article.slug)}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </div>
        </div>
      </a>
    </article>
  );
}

function ArticleView({ article, onPageChange }: { article: BlogArticle; onPageChange: (page: string) => void }) {
  const content = getArticleContent(article.slug);
  const headings = extractHeadings(content);
  const related = relatedArticles(article);
  const relatedPage = article.related && article.related !== 'contact' ? article.related : null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onPageChange={onPageChange} />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <nav aria-label="Fil d’Ariane" className="text-sm text-gray-500 mb-8">
          <ol className="flex flex-wrap items-center gap-1">
            <li><PageLink to="home" className="hover:text-emerald-800">Accueil</PageLink></li>
            <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
            <li><PageLink to="notre-blog" className="hover:text-emerald-800">Guides</PageLink></li>
            <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
            <li className="text-gray-700" aria-current="page">{article.category}</li>
          </ol>
        </nav>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={article.image}
            alt=""
            width={1200}
            height={500}
            {...HIGH_PRIORITY}
            className="w-full h-64 md:h-80 object-cover"
          />

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 text-sm mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Publié le <time dateTime={articleIsoDate(article.date)}>{formatDate(article.date)}</time>
              </span>
              {article.updated && article.updated !== article.date && (
                <span className="flex items-center gap-1">
                  <RefreshCw className="w-4 h-4" aria-hidden="true" />
                  Mis à jour le <time dateTime={articleIsoDate(article.updated)}>{formatDate(article.updated)}</time>
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {readTime(article.slug)} de lecture
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{article.excerpt}</p>

            {headings.length >= 3 && (
              <nav aria-label="Sommaire" className="article-toc">
                <p>Sommaire</p>
                <ol>
                  {headings.map((heading) => (
                    <li key={heading}><a href={`#${headingId(heading)}`}>{heading}</a></li>
                  ))}
                </ol>
              </nav>
            )}

            <RichText content={content} className="article-body" />

            <div className="article-author">
              <strong>Rédigé par l’équipe Reno Soluces</strong>
              <span>
                Basés à Trausse (Aude), nous accompagnons les projets de rénovation énergétique en Occitanie et
                les orientons vers des professionnels partenaires. Les règles et aides citées sont vérifiées à la
                date de mise à jour indiquée et peuvent évoluer.
              </span>
            </div>
          </div>
        </article>

        <section className="article-cta" aria-label="Votre projet">
          <div>
            <h2>Un projet de rénovation énergétique ?</h2>
            <p>Décrivez votre logement et vos besoins : nous étudions votre demande et vous orientons vers un professionnel partenaire.</p>
          </div>
          <div className="article-cta-actions">
            <PageLink to="contact" className="primary">Décrire mon projet <ArrowRight size={16} /></PageLink>
            {relatedPage && (
              <PageLink to={relatedPage} className="secondary">{guideLabel(relatedPage)}</PageLink>
            )}
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-14" aria-labelledby="related-title">
            <h2 id="related-title" className="text-2xl font-bold text-gray-900 mb-6">À lire aussi</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((item) => <ArticleCard key={item.slug} article={item} />)}
            </div>
          </section>
        )}
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
}

const NotreBlog = ({ onPageChange, currentSlug = null }: NotreBlogProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const selectedArticle = currentSlug ? findArticleBySlug(currentSlug) : undefined;
  if (selectedArticle) return <ArticleView article={selectedArticle} onPageChange={onPageChange} />;

  const query = searchTerm.trim().toLowerCase();
  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    const matchesSearch =
      !query || article.title.toLowerCase().includes(query) || article.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onPageChange={onPageChange} />

      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Guides et conseils en rénovation énergétique
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Panneaux solaires, pompes à chaleur, isolation, aides et réglementation : nos guides pour comprendre
            avant de décider, mis à jour selon les règles en vigueur.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
              <label htmlFor="blog-search" className="sr-only">Rechercher un article</label>
              <input
                id="blog-search"
                type="search"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par thème">
              {['Tous', ...ARTICLE_CATEGORIES].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category ? 'bg-emerald-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {filteredArticles.length === 0 ? (
          <p className="text-center py-16 text-gray-500 text-lg">Aucun article trouvé pour cette recherche.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        )}

        <section className="mt-20" aria-labelledby="practical-guides-title">
          <h2 id="practical-guides-title" className="text-3xl font-bold text-gray-900 mb-2">Guides pratiques</h2>
          <p className="text-gray-600 mb-8">Prix, fonctionnement, installation : nos dossiers de référence par type de travaux.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRACTICAL_GUIDES.map((key) => (
              <PageLink
                key={key}
                to={key}
                className="flex items-center justify-between gap-4 bg-white border border-gray-200 p-5 hover:border-emerald-700 transition-colors"
              >
                <span className="font-semibold text-gray-900">{guideLabel(key)}</span>
                <ArrowRight className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
              </PageLink>
            ))}
          </div>
        </section>

        <section className="bg-emerald-900 text-white p-12 rounded-2xl text-center shadow-xl mt-16">
          <h2 className="text-3xl font-bold mb-4">Une question sur votre projet ?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Décrivez votre logement et vos besoins : nous étudions votre demande et vous orientons vers un
            professionnel partenaire adapté. Gratuit et sans engagement.
          </p>
          <PageLink to="contact" className="inline-flex items-center gap-2 bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Décrire mon projet <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </PageLink>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default NotreBlog;
