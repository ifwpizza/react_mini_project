import { usePortfolio, COLOR_PALETTES, LAYOUT_TEMPLATES } from '../../context/PortfolioContext';
import { ChevronRight, ChevronLeft, Check, Layout, Palette } from 'lucide-react';
import './Steps.css';

export default function AppearanceStep() {
  const { state, setPalette, setLayout, nextStep, prevStep } = usePortfolio();

  return (
    <div className="step-view">
      <div className="step-header">
        <h2 className="step-title">Appearance</h2>
        <p className="step-subtitle">Choose your portfolio's look and feel.</p>
      </div>

      {/* Color Palette */}
      <div className="section-block">
        <div className="section-block-header">
          <h3 className="section-block-title"><Palette size={16} /> Color Palette</h3>
        </div>
        <div className="selection-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))' }}>
          {COLOR_PALETTES.map((palette) => (
            <button
              key={palette.id}
              className={`selection-card ${state.selectedPalette.id === palette.id ? 'active' : ''}`}
              onClick={() => setPalette(palette)}
              id={`palette-${palette.id}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span className="selection-card-title" style={{ fontSize: 'var(--text-sm)' }}>{palette.name}</span>
                {state.selectedPalette.id === palette.id && (
                  <span style={{
                    width: '18px', height: '18px', borderRadius: 'var(--r-full)',
                    background: 'var(--accent)', color: 'white', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}><Check size={11} strokeWidth={3} /></span>
                )}
              </div>
              <div className="color-swatch-row">
                {[palette.primary, palette.secondary, palette.accent, palette.bg].map((c, j) => (
                  <div key={j} className="color-swatch" style={{ background: c }} />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Layout Template */}
      <div className="section-block">
        <div className="section-block-header">
          <h3 className="section-block-title"><Layout size={16} /> Layout Template</h3>
        </div>
        <div className="selection-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {LAYOUT_TEMPLATES.map((layout) => {
            const isActive = state.selectedLayout.id === layout.id;
            return (
              <button
                key={layout.id}
                className={`selection-card ${isActive ? 'active' : ''}`}
                onClick={() => setLayout(layout)}
                id={`layout-${layout.id}`}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="selection-card-title">{layout.name}</span>
                  {isActive && (
                    <span style={{
                      width: '18px', height: '18px', borderRadius: 'var(--r-full)',
                      background: 'var(--accent)', color: 'white', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                    }}><Check size={11} strokeWidth={3} /></span>
                  )}
                </div>

                {/* Layout Thumbnail */}
                <div style={{
                  height: '64px', borderRadius: 'var(--r-md)', overflow: 'hidden',
                  border: '1px solid var(--border-light)', marginBottom: '8px',
                  background: 'var(--bg-inset)', display: 'flex', position: 'relative',
                }}>
                  {layout.id === 'modern' && (
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ height: '55%', background: `linear-gradient(135deg, ${state.selectedPalette.primary}, ${state.selectedPalette.secondary})`, opacity: 0.7 }} />
                      <div style={{ flex: 1, padding: '4px 8px', display: 'flex', gap: '4px' }}>
                        <div style={{ width: '30%', height: '6px', borderRadius: '3px', background: 'var(--border-default)' }} />
                        <div style={{ width: '20%', height: '6px', borderRadius: '3px', background: 'var(--border-default)' }} />
                      </div>
                    </div>
                  )}
                  {layout.id === 'split' && (
                    <>
                      <div style={{ width: '32%', background: state.selectedPalette.primary, opacity: 0.7 }} />
                      <div style={{ flex: 1, padding: '6px 8px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ width: '60%', height: '5px', borderRadius: '3px', background: 'var(--border-default)' }} />
                        <div style={{ width: '45%', height: '5px', borderRadius: '3px', background: 'var(--border-default)' }} />
                        <div style={{ width: '70%', height: '5px', borderRadius: '3px', background: 'var(--border-light)' }} />
                      </div>
                    </>
                  )}
                  {layout.id === 'minimal' && (
                    <div style={{ width: '100%', padding: '8px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <div style={{ width: '40%', height: '6px', borderRadius: '3px', background: 'var(--border-default)' }} />
                      <div style={{ width: '24px', height: '2px', borderRadius: '1px', background: state.selectedPalette.primary, opacity: 0.7 }} />
                      <div style={{ width: '60%', height: '4px', borderRadius: '2px', background: 'var(--border-light)' }} />
                    </div>
                  )}
                  {layout.id === 'creative' && (
                    <div style={{ width: '100%', background: state.selectedPalette.bg, display: 'flex', flexDirection: 'column', padding: '6px 8px', gap: '3px' }}>
                      <div style={{ width: '16px', height: '3px', borderRadius: '2px', background: state.selectedPalette.primary }} />
                      <div style={{ width: '50%', height: '8px', borderRadius: '4px', background: `linear-gradient(90deg, ${state.selectedPalette.primary}, ${state.selectedPalette.secondary})`, opacity: 0.8 }} />
                      <div style={{ width: '35%', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.15)' }} />
                    </div>
                  )}
                </div>

                <p className="selection-card-desc">{layout.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="step-navigation">
        <button className="btn btn-secondary" onClick={prevStep}><ChevronLeft size={16} /> Back</button>
        <button className="btn btn-primary btn-lg" onClick={nextStep}>Preview Portfolio <ChevronRight size={16} /></button>
      </div>
    </div>
  );
}
