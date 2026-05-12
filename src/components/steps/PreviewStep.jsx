import { useRef } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ChevronLeft, Download, Printer, Sparkles } from 'lucide-react';
import PortfolioRenderer from '../preview/PortfolioRenderer';
import './Steps.css';

export default function PreviewStep() {
  const { state, prevStep } = usePortfolio();
  const previewRef = useRef(null);
  const name = `${state.personalInfo.firstName || 'Portfolio'} ${state.personalInfo.lastName || ''}`.trim();

  const handlePrint = () => {
    const content = previewRef.current;
    if (!content) return;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>${name} — Portfolio</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
      <style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}</style>
    </head><body>${content.innerHTML}</body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 500);
  };

  const handleDownloadHTML = () => {
    const content = previewRef.current;
    if (!content) return;
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
      <title>${name} — Portfolio</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
      <style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased}</style>
    </head><body>${content.innerHTML}</body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.personalInfo.firstName || 'portfolio'}-portfolio.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="step-view">
      <div className="step-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', marginBottom: 'var(--sp-2)' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: 'var(--r-lg)',
            background: 'var(--accent-gradient)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', color: 'white',
          }}>
            <Sparkles size={18} />
          </div>
          <h2 className="step-title" style={{ marginBottom: 0 }}>Your Portfolio is Ready!</h2>
        </div>
        <p className="step-subtitle">Preview your generated portfolio below. Export when you're happy with it.</p>
      </div>

      {/* Export Buttons */}
      <div style={{ display: 'flex', gap: 'var(--sp-3)', marginBottom: 'var(--sp-6)', flexWrap: 'wrap' }}>
        <button className="btn btn-primary btn-lg" onClick={handleDownloadHTML} id="download-html-btn">
          <Download size={16} /> Download HTML
        </button>
        <button className="btn btn-secondary btn-lg" onClick={handlePrint} id="print-btn">
          <Printer size={16} /> Print / PDF
        </button>
      </div>

      {/* Preview Frame */}
      <div style={{
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--r-2xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        background: '#fff',
      }}>
        {/* Browser Chrome */}
        <div style={{
          height: '36px', background: 'var(--bg-inset)', borderBottom: '1px solid var(--border-light)',
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: '6px',
        }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
          <div style={{
            flex: 1, height: '20px', borderRadius: 'var(--r-md)', background: 'var(--bg-surface)',
            border: '1px solid var(--border-light)', marginLeft: '12px',
            display: 'flex', alignItems: 'center', paddingLeft: '8px',
            fontSize: '10px', color: 'var(--text-quaternary)', fontFamily: 'var(--font-mono)',
          }}>
            {state.personalInfo.firstName ? `${state.personalInfo.firstName.toLowerCase()}-portfolio.html` : 'portfolio.html'}
          </div>
        </div>
        <div ref={previewRef}>
          <PortfolioRenderer data={state} />
        </div>
      </div>

      <div className="step-navigation">
        <button className="btn btn-secondary" onClick={prevStep}><ChevronLeft size={16} /> Back to Editing</button>
        <div />
      </div>
    </div>
  );
}
