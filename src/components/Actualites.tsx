import { Calendar } from 'lucide-react';
import { blogArticles, articleIsoDate } from '../data/blogArticles';
import type { ArticleCategory } from '../data/blogArticles';
import { articleUrl } from '../seo/routes';

interface ActualitesProps {
  onPageChange?: (page: string) => void;
  /** Thème à privilégier ; à défaut, les articles les plus récents. */
  category?: ArticleCategory;
}

/** Bloc « Guides et conseils » affiché en bas des pages solutions et aides. */
const Actualites = ({ category }: ActualitesProps) => {
  const preferred = category ? blogArticles.filter((a) => a.category === category) : [];
  const articles = [...preferred, ...blogArticles.filter((a) => !preferred.includes(a))].slice(0, 3);

  return (
    <section className="bg-white py-16" aria-labelledby="actualites-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 id="actualites-title" className="text-4xl font-bold text-gray-900">
            Guides et <span className="text-green-500">conseils</span>
          </h2>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nos articles pour comprendre les solutions, les aides et la réglementation avant de vous lancer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <a href={articleUrl(article.slug)} className="block h-full">
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
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time dateTime={articleIsoDate(article.updated ?? article.date)}>{article.updated ?? article.date}</time>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="/guides" className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Tous les guides Reno Soluces
          </a>
        </div>
      </div>
    </section>
  );
};

export default Actualites;
