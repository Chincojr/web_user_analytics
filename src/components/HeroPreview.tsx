import type { CSSProperties } from 'react';
import type { HeroVisual } from '../utils/types/homePage';
import LogoMark from './LogoMark';

export default function HeroPreview({ scene, brandName }: { scene: HeroVisual; brandName: string }) {
  const graphWidth = 180;
  const graphHeight = 50;
  const graphStep = graphWidth / Math.max(scene.highlightGraph.points.length - 1, 1);
  const graphPoints = scene.highlightGraph.points.map((value, index) => `${index * graphStep},${graphHeight - value * 0.42}`).join(' ');
  const finalGraphValue = scene.highlightGraph.points.at(-1) ?? 0;
  const finalGraphX = (scene.highlightGraph.points.length - 1) * graphStep;
  const finalGraphY = graphHeight - finalGraphValue * 0.42;

  return (
    <div className="visual-wrap" role="img" aria-label={scene.ariaLabel}>
      <div className="visual-glow" />
      <div className="visual-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="floating-signal-card" key={scene.highlightGraph.label}>
        <div className="floating-signal-heading"><span><i />{scene.highlightGraph.label}</span><b>↗</b></div>
        <strong>{scene.highlightGraph.value}</strong>
        <small>{scene.highlightGraph.note}</small>
        <svg className="floating-signal-graph" viewBox="0 0 180 54" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="signal-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#77f4df" stopOpacity=".34" />
              <stop offset="100%" stopColor="#77f4df" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon className="signal-area" points={`0,54 ${graphPoints} 180,54`} />
          <polyline className="signal-line" points={graphPoints} />
          <circle className="signal-point" cx={finalGraphX} cy={finalGraphY} r="3.5" />
        </svg>
        <div className="floating-signal-tags">{scene.highlightGraph.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <div className={`analytics-window analytics-window-${scene.kind}`} key={scene.kind + scene.title}>
        <div className="window-chrome">
          <div className="window-dots"><i /><i /><i /></div>
          <span className="window-address">{scene.windowLabel}</span>
          <span className="window-profile">●</span>
        </div>
        <div className="analytics-app">
          <aside className="app-sidebar">
            <div className="app-brand"><LogoMark compact />{brandName}</div>
            <span className="workspace-label">{scene.workspaceLabel}</span>
            <div className="app-nav-list">
              {scene.navItems.map((item, index) => (
                <div className={`app-nav-item ${index === (scene.kind === 'web' ? 2 : scene.kind === 'market' ? 3 : 0) ? 'is-active' : ''}`} key={item}>
                  <i aria-hidden="true">{['◫', '⌁', '▧', '◉'][index % 4]}</i>{item}
                </div>
              ))}
            </div>
            <div className="sidebar-status"><span />{scene.insightLabel}</div>
          </aside>

          <div className="app-main">
            <div className="app-heading">
              <div><span className="app-kicker">{scene.workspaceLabel}</span><h2>{scene.title}</h2></div>
              <span className="date-filter">{scene.range}<b>⌄</b></span>
            </div>
            <div className="metric-row">
              {scene.metrics.map((metric, index) => (
                <div className="metric-card" key={metric.label}>
                  <span>{metric.label}</span><strong>{metric.value}</strong><small className={`metric-change metric-change-${index}`}>{metric.change}</small>
                </div>
              ))}
            </div>
            <div className="app-detail-grid">
              <div className="chart-card">
                <div className="card-title"><strong>{scene.chartTitle}</strong><span>↗</span></div>
                <div className="mini-chart">
                  <div className="chart-guides"><i /><i /><i /><i /></div>
                  <div className="chart-columns">
                    {scene.chartBars.map((height, index) => <i key={index} style={{ '--bar-height': `${height}%`, '--bar-index': index } as CSSProperties} />)}
                  </div>
                  <div className="chart-sweep" />
                </div>
                <div className="chart-legend"><span /><span>{scene.chartTitle}</span></div>
              </div>
              <div className="signals-card">
                <div className="card-title"><strong>{scene.signalsTitle}</strong><span>•••</span></div>
                <div className="signal-list">
                  {scene.signals.map((signal) => (
                    <div className="signal-row" key={signal.title}>
                      <span className={`signal-dot signal-dot-${signal.type}`} />
                      <span><strong>{signal.title}</strong><small>{signal.detail}</small></span>
                      <b>↗</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="insight-banner"><span className="insight-sparkle">✳</span><span><small>{scene.insightLabel}</small><strong>{scene.insight}</strong></span><b>↗</b></div>
          </div>
        </div>
      </div>
      <div className="pop-tile pop-tile-momentum" key={`${scene.kind}-momentum`}>
        <div className="pop-tile-top"><span className="tile-icon">↗</span><small>{scene.metrics[0].label}</small></div>
        <strong>{scene.metrics[0].value}</strong>
        <small className="pop-tile-note">{scene.metrics[0].change}</small>
        <div className="tile-bars">{scene.chartBars.slice(-6).map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
      </div>
      <div className="pop-tile pop-tile-context" key={`${scene.kind}-context`}>
        <div className="tile-context-top"><span className="context-pulse" /><small>{scene.metrics[1].label}</small><b>↗</b></div>
        <strong>{scene.metrics[1].value}</strong>
        <span className="context-note">{scene.metrics[1].change}</span>
        <div className="tile-signal-list">
          {scene.signals.slice(0, 2).map((signal) => <span key={signal.title}><i className={`signal-dot signal-dot-${signal.type}`} />{signal.title}</span>)}
        </div>
      </div>
      <div className="visual-caption"><span className="caption-pulse" />{scene.caption}</div>
    </div>
  );
}
