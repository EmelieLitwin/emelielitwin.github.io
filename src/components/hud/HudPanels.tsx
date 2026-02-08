import React from 'react';

interface HudPanelsProps {
  latencyMs: number;
  signalPct: number;
  lockState: 'ACQUIRED' | 'SEARCH' | 'TRACKING';
  scrollProgress: number;
  focus: number;
  mouseNormX: number;
  mouseNormY: number;
  sparklineData: number[];
}

export const HudPanels: React.FC<HudPanelsProps> = ({
  latencyMs,
  signalPct,
  lockState,
  scrollProgress,
  focus,
  mouseNormX,
  mouseNormY,
  sparklineData,
}) => {
  return (
    <>
      {/* Top Left Panel - PORT-254 */}
      <div className="hud-panel hud-panel-tl">
        <div className="panel-header">PORT-254</div>
        <div className="panel-body">
          <div className="panel-data">LAT  {latencyMs}ms</div>
          <div className="panel-data">SIG  {signalPct}%</div>
          <div className="panel-data">{lockState}</div>
        </div>
      </div>

      {/* Top Right Panel - R-LEVEL */}
      <div className="hud-panel hud-panel-tr">
        <div className="panel-header">R-LEVEL</div>
        <div className="panel-body">
          <div className="panel-data">SCROLL {Math.round(scrollProgress * 100)}%</div>
          <div className="panel-sparkline">
            {sparklineData.map((val, i) => (
              <div
                key={i}
                className="sparkline-bar"
                style={{ height: `${val * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Middle Right Panel - FOCUS */}
      <div className="hud-panel hud-panel-mr">
        <div className="panel-metric">
          <div className="metric-label">FOCUS</div>
          <div className="metric-value">{focus.toFixed(2)}</div>
        </div>
        <div className="panel-data" style={{ fontSize: '8px', marginTop: '6px' }}>
          X {mouseNormX.toFixed(2)} Y {mouseNormY.toFixed(2)}
        </div>
      </div>
    </>
  );
};
