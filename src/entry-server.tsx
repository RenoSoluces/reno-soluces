/**
 * Point d'entrée utilisé uniquement au build (prérendu) : produit le HTML complet
 * de chaque page pour que les moteurs de recherche et les robots qui n'exécutent
 * pas JavaScript lisent le contenu réel.
 */
import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'node:stream';
import App from './App';

/** Rendu complet d'une page, une fois toutes les pages chargées à la demande résolues. */
export function render(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    sink.on('finish', () => resolve(html));
    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <App initialPath={path} />
      </StrictMode>,
      {
        onAllReady: () => pipe(sink),
        onShellError: reject,
        onError: (error) => reject(error),
      }
    );
  });
}

export {
  blogArticles,
  isArticleIndexable,
  ARTICLE_REDIRECTS,
  articleImage,
  articleIsoDate,
} from './data/blogArticles';
export { wordCount } from './data/articleContent';
export {
  PAGE_ROUTES,
  PAGE_META,
  SITE_URL,
  articleUrl,
  getPageMeta,
  resolveLocation,
  pathFor,
} from './seo/routes';
export { buildStructuredData } from './seo/structuredData';
export { PAGE_MODULES } from './pageModules';
