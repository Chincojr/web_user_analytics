export type FeatureVisual = 'heatmap' | 'replay' | 'journey' | 'research';

export interface FeatureStory {
  eyebrow: string;
  title: string;
  description: string;
  details: string[];
  visual: FeatureVisual;
  preview: FeaturePreview;
}

export type FeaturePreview =
  | { type: 'heatmap'; windowLabel: string; pageTitle: string; actionLabel: string; markerLabel: string; legendLabel: string }
  | { type: 'replay'; sessionLabel: string; sessionMeta: string; status: string; pageTitle: string; actionLabel: string; timelineLabel: string }
  | { type: 'journey'; title: string; period: string; steps: { title: string; value: string }[]; insight: string }
  | { type: 'research'; title: string; period: string; bars: number[]; signal: string; signalValue: string; summaryTitle: string; summary: string };
