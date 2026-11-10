import { useEffect, useState } from 'react';
import type { HomePageContent } from '../utils/types/homePage';
import HeroPreview from './HeroPreview';

export default function HeroSection({ content }: { content: HomePageContent }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = content.hero.slides[activeIndex];

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % content.hero.slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [content.hero.slides.length, isPaused]);

  function showSlide(index: number) {
    setActiveIndex((index + content.hero.slides.length) % content.hero.slides.length);
  }

  return (
    <section
      className="hero"
      id="how-it-works"
      aria-label={content.hero.slidesLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setIsPaused(false);
      }}
    >
      <div className="shell hero-grid">
        <div className="hero-text" key={activeIndex}>
          <div className="eyebrow"><span className="eyebrow-dot" />{content.hero.eyebrow}</div>
          <h1>{slide.headline}<br /><span>{slide.highlight}</span></h1>
          <p className="hero-copy">{slide.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#features">{content.hero.primaryAction}<span aria-hidden="true">↗</span></a>
            <a className="button button-quiet" href="#why-your-site"><span aria-hidden="true">↓</span>{content.hero.secondaryAction}</a>
          </div>
          <div className="hero-note"><span className="hero-note-mark" aria-hidden="true">✓</span>{content.hero.reassurance}</div>
          <div className="slide-controls" role="group" aria-label={content.hero.slidesLabel}>
            <button className="slide-arrow" type="button" aria-label={content.hero.previousSlide} onClick={() => showSlide(activeIndex - 1)}>←</button>
            <div className="slide-dots">
              {content.hero.slides.map((item, index) => (
                <button
                  className={`slide-dot ${activeIndex === index ? 'is-active' : ''}`}
                  type="button"
                  aria-label={content.hero.slideButtonLabel.replace('{number}', String(index + 1))}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  onClick={() => showSlide(index)}
                  key={item.headline}
                />
              ))}
            </div>
            <button className="slide-arrow" type="button" aria-label={content.hero.nextSlide} onClick={() => showSlide(activeIndex + 1)}>→</button>
          </div>
        </div>
        <HeroPreview scene={slide.visual} brandName={content.brand.name} />
      </div>
    </section>
  );
}
