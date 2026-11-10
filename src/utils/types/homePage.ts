import type { FeatureStory } from './feature';

export type HeroVisualKind = 'web' | 'business' | 'market';

export interface HeroMetric {
  label: string;
  value: string;
  change: string;
}

export interface HeroSignal {
  title: string;
  detail: string;
  type: 'web' | 'business' | 'market';
}

export interface HeroVisual {
  kind: HeroVisualKind;
  caption: string;
  ariaLabel: string;
  windowLabel: string;
  workspaceLabel: string;
  navItems: string[];
  title: string;
  range: string;
  metrics: HeroMetric[];
  chartTitle: string;
  chartBars: number[];
  signalsTitle: string;
  signals: HeroSignal[];
  insightLabel: string;
  insight: string;
  highlightGraph: {
    label: string;
    value: string;
    note: string;
    points: number[];
    tags: string[];
  };
}

export interface HeroSlide {
  headline: string;
  highlight: string;
  description: string;
  visual: HeroVisual;
}

export interface HomePageContent {
  meta: { title: string; description: string };
  brand: { name: string; ariaLabel: string };
  navigation: {
    ariaLabel: string;
    links: { label: string; href: string }[];
    loginLabel: string;
    getStartedLabel: string;
  };
  themeToggle: { switchToLight: string; switchToDark: string };
  hero: {
    eyebrow: string;
    slides: HeroSlide[];
    slidesLabel: string;
    slideButtonLabel: string;
    primaryAction: string;
    secondaryAction: string;
    reassurance: string;
    previousSlide: string;
    nextSlide: string;
  };
  story: {
    id: string;
    eyebrow: string;
    title: string;
    highlight: string;
    paragraphs: string[];
    steps: { number: string; title: string; description: string }[];
  };
  featureSection: {
    eyebrow: string;
    title: string;
    description: string;
    websiteAnalytics: { eyebrow: string; title: string; description: string; features: FeatureStory[] };
    businessAnalytics: { eyebrow: string; title: string; description: string; features: FeatureStory[] };
  };
  finalCta: { eyebrow: string; title: string; description: string; button: string; email: string };
  footer: { copyright: string; links: { label: string; href: string }[] };
}
