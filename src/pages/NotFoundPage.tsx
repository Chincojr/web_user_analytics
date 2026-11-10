import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pageContent from '../content/pages/NotFoundPage/NotFoundPage_eng.json';
import type { NotFoundPageContent } from '../utils/types/notFoundPage';

const content = pageContent as NotFoundPageContent;

export default function NotFoundPage() {
  useEffect(() => {
    document.title = content.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description);
  }, []);

  return (
    <main className="not-found shell">
      <span className="eyebrow">{content.eyebrow}</span>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <Link className="button button-primary" to="/">{content.homeAction}</Link>
    </main>
  );
}
