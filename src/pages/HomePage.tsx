import { useEffect } from 'react';
import pageContent from '../content/pages/HomePage/HomePage_eng.json';
import type { HomePageContent } from '../utils/types/homePage';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const content = pageContent as HomePageContent;

export default function HomePage() {
  useEffect(() => {
    document.title = content.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description);
  }, []);

  return (
    <>
      <Navbar content={content} />
      <main id="top">
        <HeroSection content={content} />

        <section className="ownership-section" id={content.story.id}>
          <div className="shell ownership-grid">
            <div className="ownership-copy">
              <div className="eyebrow"><span className="eyebrow-dot" />{content.story.eyebrow}</div>
              <h2>{content.story.title}<br /><span>{content.story.highlight}</span></h2>
            </div>
            <div className="ownership-body">
              {content.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="shell principles-row">
            {content.story.steps.map((step) => (
              <article className="principle" key={step.number}>
                <span className="principle-number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section feature-section" id="features">
          <div className="shell">
            <div className="section-heading">
              <div className="eyebrow"><span className="eyebrow-dot" />{content.featureSection.eyebrow}</div>
              <h2>{content.featureSection.title}</h2>
              <p>{content.featureSection.description}</p>
            </div>

            <section className="feature-group" aria-label={content.featureSection.websiteAnalytics.title}>
              <div className="feature-group-heading">
                <div><span>{content.featureSection.websiteAnalytics.eyebrow}</span><h3>{content.featureSection.websiteAnalytics.title}</h3></div>
                <p>{content.featureSection.websiteAnalytics.description}</p>
              </div>
              <div className="feature-grid">
                {content.featureSection.websiteAnalytics.features.map((feature) => <FeatureCard feature={feature} key={feature.title} />)}
              </div>
            </section>

            <section className="feature-group business-group" aria-label={content.featureSection.businessAnalytics.title}>
              <div className="feature-group-heading">
                <div><span>{content.featureSection.businessAnalytics.eyebrow}</span><h3>{content.featureSection.businessAnalytics.title}</h3></div>
                <p>{content.featureSection.businessAnalytics.description}</p>
              </div>
              <div className="business-feature-grid">
                {content.featureSection.businessAnalytics.features.map((feature) => <FeatureCard feature={feature} key={feature.title} />)}
              </div>
            </section>
          </div>
        </section>

        <section className="shell bottom-cta" id="get-started">
          <div className="cta-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="cta-copy">
            <div className="eyebrow"><span className="eyebrow-dot" />{content.finalCta.eyebrow}</div>
            <h2>{content.finalCta.title}</h2>
            <p>{content.finalCta.description}</p>
          </div>
          <a className="button button-primary" href={`mailto:${content.finalCta.email}`}>{content.finalCta.button}<span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <Footer content={content} />
    </>
  );
}
