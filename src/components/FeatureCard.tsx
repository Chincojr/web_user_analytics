import type { CSSProperties } from 'react';
import type { FeaturePreview, FeatureStory } from '../utils/types/feature';

function FeaturePreviewVisual({ preview }: { preview: FeaturePreview }) {
  switch (preview.type) {
    case 'heatmap':
      return (
        <div className="feature-demo feature-demo-heatmap" role="img" aria-label={preview.markerLabel}>
          <div className="demo-browser-bar"><span /><span /><span /><i>{preview.windowLabel}</i></div>
          <div className="heatmap-page">
            <div className="heatmap-site-nav"><b>●</b><span /><span /><span /></div>
            <div className="heatmap-page-title">{preview.pageTitle}</div>
            <span className="heatmap-action">{preview.actionLabel}</span>
            <i className="heatmap-spot spot-one" /><i className="heatmap-spot spot-two" />
            <span className="heatmap-marker">{preview.markerLabel}</span>
          </div>
          <div className="heatmap-legend"><span />{preview.legendLabel}<div className="heatmap-scale" /></div>
        </div>
      );
    case 'replay':
      return (
        <div className="feature-demo feature-demo-replay">
          <div className="preview-session"><span className="preview-avatar">A</span><span>{preview.sessionLabel}<small>{preview.sessionMeta}</small></span><b>{preview.status}</b></div>
          <div className="preview-screen"><div className="preview-screen-title">{preview.pageTitle}</div><span className="preview-screen-action">{preview.actionLabel}</span><i className="replay-pointer" /></div>
          <div className="preview-timeline"><span>▶</span><div><i /></div><small>{preview.timelineLabel}</small></div>
        </div>
      );
    case 'journey':
      return (
        <div className="feature-demo feature-demo-journey">
          <div className="preview-heading"><b>{preview.title}</b><span>{preview.period}</span></div>
          <div className="journey-steps">
            {preview.steps.map((step, index) => (
              <div className="journey-step-wrap" key={step.title}>
                <div className={`journey-step journey-step-${index}`}><i>{String(index + 1).padStart(2, '0')}</i><span>{step.title}<small>{step.value}</small></span></div>
                {index < preview.steps.length - 1 && <div className="journey-line"><i /></div>}
              </div>
            ))}
          </div>
          <div className="journey-summary"><span>↳</span>{preview.insight}</div>
        </div>
      );
    case 'research':
      return (
        <div className="feature-demo feature-demo-research">
          <div className="preview-heading"><b>{preview.title}</b><span>{preview.period}</span></div>
          <div className="research-bars" aria-hidden="true">{preview.bars.map((height, index) => <i key={index} style={{ height: `${height}%`, '--bar-index': index } as CSSProperties} />)}</div>
          <div className="research-stat"><span>{preview.signal}</span><b>{preview.signalValue}</b></div>
          <div className="research-summary"><span>✳</span><div><b>{preview.summaryTitle}</b><small>{preview.summary}</small></div></div>
        </div>
      );
  }
}

export default function FeatureCard({ feature }: { feature: FeatureStory }) {
  return (
    <article className={`feature-card feature-card-${feature.visual}`}>
      <div className="feature-card-copy">
        <div className="feature-eyebrow"><span aria-hidden="true">✳</span>{feature.eyebrow}</div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <ul>{feature.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      </div>
      <div className={`feature-visual feature-visual-${feature.visual}`}>
        <FeaturePreviewVisual preview={feature.preview} />
      </div>
    </article>
  );
}
