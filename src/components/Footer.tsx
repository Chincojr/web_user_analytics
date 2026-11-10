import type { HomePageContent } from '../utils/types/homePage';
import Brand from './Brand';

export default function Footer({ content }: { content: HomePageContent }) {
  return (
    <footer id="footer">
      <div className="shell footer-row">
        <Brand brand={content.brand} />
        <span>{content.footer.copyright}</span>
        <div className="footer-links">
          {content.footer.links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
        </div>
      </div>
    </footer>
  );
}
