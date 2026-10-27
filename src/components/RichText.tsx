import type { ReactNode } from 'react';

/**
 * Affiche le contenu des articles écrit avec un balisage léger :
 *   ## Intertitre   ### Sous-intertitre   - liste   1. liste numérotée
 *   > encadré       **gras**              [texte](/lien)
 * Rendu sans HTML brut, compatible avec le prérendu.
 */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const key = `${keyPrefix}-${i++}`;
    if (match[1] !== undefined) {
      nodes.push(<strong key={key}>{renderInline(match[1], key)}</strong>);
    } else {
      const href = match[3];
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <a key={key} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {match[2]}
        </a>
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

type Block =
  | { type: 'h2' | 'h3' | 'p' | 'quote'; text: string }
  | { type: 'ul' | 'ol'; items: string[] };

function parse(content: string): Block[] {
  const blocks: Block[] = [];
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  let paragraph: string[] = [];
  let list: { type: 'ul' | 'ol'; items: string[] } | null = null;

  const flush = () => {
    if (paragraph.length) blocks.push({ type: 'p', text: paragraph.join(' ') });
    paragraph = [];
    if (list) blocks.push(list);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    const heading = /^(#{2,3})\s+(.*)$/.exec(line);
    const bullet = /^[-•]\s+(.*)$/.exec(line);
    const numbered = /^\d+\.\s+(.*)$/.exec(line);
    const quote = /^>\s?(.*)$/.exec(line);

    if (heading) {
      flush();
      blocks.push({ type: heading[1].length === 2 ? 'h2' : 'h3', text: heading[2] });
    } else if (bullet || numbered) {
      const type = bullet ? 'ul' : 'ol';
      if (paragraph.length) {
        blocks.push({ type: 'p', text: paragraph.join(' ') });
        paragraph = [];
      }
      if (!list || list.type !== type) {
        if (list) blocks.push(list);
        list = { type, items: [] };
      }
      list.items.push((bullet ?? numbered)![1]);
    } else if (quote) {
      flush();
      blocks.push({ type: 'quote', text: quote[1] });
    } else if (list) {
      // Ligne de continuation d'un élément de liste.
      list.items[list.items.length - 1] += ` ${line}`;
    } else {
      paragraph.push(line);
    }
  }
  flush();
  return blocks;
}

/** Identifiant d'ancre pour un intertitre. */
export const headingId = (text: string): string =>
  text
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Intertitres de niveau 2, pour un sommaire. */
export const extractHeadings = (content: string): string[] =>
  parse(content)
    .filter((block): block is { type: 'h2'; text: string } => block.type === 'h2')
    .map((block) => block.text);

export default function RichText({ content, className }: { content: string; className?: string }) {
  const blocks = parse(content);
  return (
    <div className={className}>
      {blocks.map((block, index) => {
        const key = `b${index}`;
        switch (block.type) {
          case 'h2':
            return <h2 key={key} id={headingId(block.text)}>{renderInline(block.text, key)}</h2>;
          case 'h3':
            return <h3 key={key}>{renderInline(block.text, key)}</h3>;
          case 'quote':
            return <aside key={key} className="rich-note">{renderInline(block.text, key)}</aside>;
          case 'ul':
            return (
              <ul key={key}>
                {block.items.map((item, i) => <li key={i}>{renderInline(item, `${key}-${i}`)}</li>)}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key}>
                {block.items.map((item, i) => <li key={i}>{renderInline(item, `${key}-${i}`)}</li>)}
              </ol>
            );
          default:
            return <p key={key}>{renderInline(block.text, key)}</p>;
        }
      })}
    </div>
  );
}

