import { usePortfolio } from '../context/PortfolioContext';
import { Sun, Moon, Eye, EyeOff, RotateCcw } from 'lucide-react';
import './Header.css';

export default function Header({ showPreview, setShowPreview }) {
  const { state, toggleTheme, reset } = usePortfolio();

  return (
    <header className="header" id="main-header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="header-logo-wrap">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="9" fill="url(#lg)" />
              <path d="M10 12h3v8h-3zM15 10h3v12h-3zM20 14h3v4h-3z" fill="#fff" fillOpacity="0.9" rx="1" />
            </svg>
          </div>
          <div className="header-brand-text">
            <span className="header-name">Folio<span className="header-name-accent">Gen</span></span>
            <span className="header-tagline">Portfolio Generator</span>
          </div>
        </div>

        <div className="header-actions">
          {state.currentStep < 5 && (
            <button
              className="header-btn"
              onClick={() => setShowPreview(!showPreview)}
              id="toggle-preview-btn"
              data-active={showPreview}
            >
              {showPreview ? <EyeOff size={15} /> : <Eye size={15} />}
              <span>{showPreview ? 'Hide Preview' : 'Live Preview'}</span>
            </button>
          )}

          <div className="header-divider" />

          <button
            className="header-icon-btn"
            onClick={toggleTheme}
            title={state.theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
            id="toggle-theme-btn"
          >
            {state.theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="header-icon-btn header-icon-btn--danger"
            onClick={() => { if (confirm('Reset all data? This cannot be undone.')) reset(); }}
            title="Reset All"
            id="reset-btn"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
