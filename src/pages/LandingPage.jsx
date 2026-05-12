import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { Sun, Moon } from 'lucide-react';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();
  const { state, toggleTheme } = usePortfolio();

  return (
    <div className="landing">
      {/* ── Navbar ── */}
      <nav className="ln-nav">
        <div className="ln-nav-inner">
          <div className="ln-nav-brand">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <defs><linearGradient id="nlg" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#6366F1"/><stop offset="1" stopColor="#A78BFA"/></linearGradient></defs>
              <rect width="32" height="32" rx="9" fill="url(#nlg)"/>
              <path d="M10 12h3v8h-3zM15 10h3v12h-3zM20 14h3v4h-3z" fill="#fff" fillOpacity="0.9"/>
            </svg>
            <span className="ln-nav-name">Folio<span className="ln-accent">Gen</span></span>
          </div>
          <div className="ln-nav-links">
            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
            <a href="#how">How It Works</a>
            <button className="ln-nav-theme" onClick={toggleTheme} aria-label="Toggle theme">
              {state.theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}
            </button>
            <button className="ln-nav-cta" onClick={() => navigate('/builder')}>
              Get Started — Free
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="ln-hero">
        <div className="ln-hero-bg">
          <div className="ln-hero-orb ln-hero-orb--1"/>
          <div className="ln-hero-orb ln-hero-orb--2"/>
          <div className="ln-hero-orb ln-hero-orb--3"/>
          <div className="ln-hero-grid"/>
        </div>
        <div className="ln-hero-content">
          <div className="ln-hero-badge">
            <span className="ln-badge-dot"/>
            <span>Now with 4 premium templates</span>
          </div>
          <h1 className="ln-hero-title">
            Build a Portfolio That<br/>
            <span className="ln-hero-gradient">Gets You Hired</span>
          </h1>
          <p className="ln-hero-sub">
            Create a stunning, professional portfolio website in minutes — no coding required.
            Just fill in your details and let FolioGen do the rest.
          </p>
          <div className="ln-hero-actions">
            <button className="ln-btn-primary ln-btn-lg" onClick={() => navigate('/builder')}>
              Start Building — It's Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8h9m0 0L9 4.5M12.5 8L9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <a href="#features" className="ln-btn-ghost ln-btn-lg">See Features</a>
          </div>
          <div className="ln-hero-stats">
            <div className="ln-stat"><span className="ln-stat-num">4</span><span className="ln-stat-label">Layout Templates</span></div>
            <div className="ln-stat-sep"/>
            <div className="ln-stat"><span className="ln-stat-num">8</span><span className="ln-stat-label">Color Palettes</span></div>
            <div className="ln-stat-sep"/>
            <div className="ln-stat"><span className="ln-stat-num">∞</span><span className="ln-stat-label">Possibilities</span></div>
          </div>
        </div>

        {/* Hero Mockup */}
        <div className="ln-hero-mockup">
          <div className="ln-mockup-frame">
            <div className="ln-mockup-chrome">
              <div className="ln-dot ln-dot--r"/><div className="ln-dot ln-dot--y"/><div className="ln-dot ln-dot--g"/>
              <div className="ln-mockup-url">foliogen.dev/preview</div>
            </div>
            <div className="ln-mockup-body">
              <div className="ln-mock-hero" style={{background:'linear-gradient(135deg,#6366F1,#A78BFA)'}}>
                <div className="ln-mock-avatar"/>
                <div className="ln-mock-line ln-mock-line--lg" style={{background:'rgba(255,255,255,0.9)'}}/>
                <div className="ln-mock-line ln-mock-line--md" style={{background:'rgba(255,255,255,0.5)'}}/>
              </div>
              <div className="ln-mock-content">
                <div className="ln-mock-section">
                  <div className="ln-mock-line ln-mock-line--title"/>
                  <div className="ln-mock-tags">
                    <div className="ln-mock-tag"/><div className="ln-mock-tag"/><div className="ln-mock-tag"/>
                  </div>
                </div>
                <div className="ln-mock-section">
                  <div className="ln-mock-line ln-mock-line--title"/>
                  <div className="ln-mock-card"/><div className="ln-mock-card"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="ln-section" id="features">
        <div className="ln-container">
          <div className="ln-section-header">
            <span className="ln-section-eyebrow">Features</span>
            <h2 className="ln-section-title">Everything You Need,<br/>Nothing You Don't</h2>
            <p className="ln-section-desc">Powerful tools to create a portfolio that stands out — all in one place.</p>
          </div>
          <div className="ln-features-grid">
            {[
              { icon: '📝', title: 'Multi-Step Builder', desc: 'Guided 6-step wizard walks you through every section of your portfolio effortlessly.' },
              { icon: '👁️', title: 'Live Preview', desc: 'See changes instantly with a real-time side-by-side preview as you build.' },
              { icon: '🌗', title: 'Dark & Light Mode', desc: 'Full theme support for both the builder and your generated portfolio.' },
              { icon: '📄', title: 'Export & Print', desc: 'Download as HTML or print directly to PDF — your portfolio, your way.' },
              { icon: '🎨', title: '8 Color Palettes', desc: 'Curated color schemes from Indigo Nights to Sunset Blush — pick your vibe.' },
              { icon: '📐', title: '4 Layout Templates', desc: 'Modern, Split, Minimal, or Creative — choose the layout that fits you.' },
              { icon: '🖼️', title: 'Project Showcase', desc: 'Upload images, add tech tags, and link to live demos and repositories.' },
              { icon: '🔗', title: 'Social Integration', desc: 'Connect GitHub, LinkedIn, Twitter, and more — all in one place.' },
            ].map((f, i) => (
              <div key={i} className="ln-feature-card">
                <div className="ln-feature-icon">{f.icon}</div>
                <h3 className="ln-feature-title">{f.title}</h3>
                <p className="ln-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Templates ── */}
      <section className="ln-section ln-section--alt" id="templates">
        <div className="ln-container">
          <div className="ln-section-header">
            <span className="ln-section-eyebrow">Templates</span>
            <h2 className="ln-section-title">Designed to Impress</h2>
            <p className="ln-section-desc">Four professionally crafted layouts — each one tells your story differently.</p>
          </div>
          <div className="ln-templates-grid">
            {[
              { name: 'Modern', desc: 'Gradient hero with card sections', color: '#6366F1', type: 'modern' },
              { name: 'Split', desc: 'Sidebar profile with scrollable content', color: '#10B981', type: 'split' },
              { name: 'Minimal', desc: 'Typography-first, whitespace-focused', color: '#F59E0B', type: 'minimal' },
              { name: 'Creative', desc: 'Dark, bold, asymmetric layout', color: '#EC4899', type: 'creative' },
            ].map((t, i) => (
              <div key={i} className="ln-template-card">
                <div className="ln-template-preview" style={{'--tcolor': t.color}}>
                  {t.type === 'modern' && (
                    <div className="ln-tp-modern">
                      <div className="ln-tp-hero" style={{background:`linear-gradient(135deg, ${t.color}, ${t.color}88)`}}/>
                      <div className="ln-tp-body"><div className="ln-tp-line w60"/><div className="ln-tp-line w40"/><div className="ln-tp-cards"><div className="ln-tp-card"/><div className="ln-tp-card"/></div></div>
                    </div>
                  )}
                  {t.type === 'split' && (
                    <div className="ln-tp-split">
                      <div className="ln-tp-sidebar" style={{background: t.color}}/>
                      <div className="ln-tp-main"><div className="ln-tp-line w50"/><div className="ln-tp-line w70"/><div className="ln-tp-line w30"/></div>
                    </div>
                  )}
                  {t.type === 'minimal' && (
                    <div className="ln-tp-minimal">
                      <div className="ln-tp-line w40" style={{margin:'0 auto'}}/><div className="ln-tp-accent" style={{background: t.color}}/><div className="ln-tp-line w60" style={{margin:'0 auto'}}/><div className="ln-tp-line w50" style={{margin:'0 auto',opacity:0.5}}/>
                    </div>
                  )}
                  {t.type === 'creative' && (
                    <div className="ln-tp-creative" style={{background:'#0B0F1A'}}>
                      <div className="ln-tp-accent" style={{background: t.color, width:'20px'}}/><div className="ln-tp-line w50" style={{background:`linear-gradient(90deg, ${t.color}, ${t.color}66)`}}/><div className="ln-tp-line w30" style={{background:'rgba(255,255,255,0.1)'}}/>
                    </div>
                  )}
                </div>
                <div className="ln-template-info">
                  <h3 className="ln-template-name">{t.name}</h3>
                  <p className="ln-template-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="ln-section" id="how">
        <div className="ln-container">
          <div className="ln-section-header">
            <span className="ln-section-eyebrow">How It Works</span>
            <h2 className="ln-section-title">Three Steps to Your<br/>Dream Portfolio</h2>
          </div>
          <div className="ln-steps-row">
            {[
              { num: '01', title: 'Fill In Your Details', desc: 'Enter your info, skills, experience, and projects through our guided wizard.' },
              { num: '02', title: 'Pick Your Style', desc: 'Choose from 4 layouts and 8 color palettes to match your personality.' },
              { num: '03', title: 'Export & Share', desc: 'Download as HTML, print to PDF, or share directly with anyone.' },
            ].map((s, i) => (
              <div key={i} className="ln-step-card">
                <div className="ln-step-num">{s.num}</div>
                <h3 className="ln-step-title">{s.title}</h3>
                <p className="ln-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ln-cta">
        <div className="ln-cta-bg">
          <div className="ln-cta-orb ln-cta-orb--1"/>
          <div className="ln-cta-orb ln-cta-orb--2"/>
        </div>
        <div className="ln-container ln-cta-content">
          <h2 className="ln-cta-title">Ready to Stand Out?</h2>
          <p className="ln-cta-desc">Join thousands of professionals who showcase their work with FolioGen.</p>
          <button className="ln-btn-primary ln-btn-xl" onClick={() => navigate('/builder')}>
            Create Your Portfolio Now
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3.5 8h9m0 0L9 4.5M12.5 8L9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <p className="ln-cta-note">Free forever · No signup required · Export instantly</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ln-footer">
        <div className="ln-container ln-footer-inner">
          <div className="ln-footer-brand">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><defs><linearGradient id="flg" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#6366F1"/><stop offset="1" stopColor="#A78BFA"/></linearGradient></defs><rect width="32" height="32" rx="9" fill="url(#flg)"/><path d="M10 12h3v8h-3zM15 10h3v12h-3zM20 14h3v4h-3z" fill="#fff" fillOpacity="0.9"/></svg>
            <span>FolioGen</span>
          </div>
          <p className="ln-footer-copy">© {new Date().getFullYear()} FolioGen. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
}
