import type { HomePageContent } from '../utils/types/homePage';
import Brand from './Brand';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ content }: { content: HomePageContent }) {
  return (
    <div className="nav-wrap">
      <nav className="shell navbar" aria-label={content.navigation.ariaLabel}>
        <Brand brand={content.brand} />
        <div className="nav-links">
          {content.navigation.links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
        </div>
        <div className="nav-actions">
          <a className="login" href="#footer">{content.navigation.loginLabel}</a>
          <ThemeToggle labels={content.themeToggle} />
          <a className="button button-primary" href="#get-started">{content.navigation.getStartedLabel}<span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </div>
  );
}
