import { usePortfolio } from '../context/PortfolioContext';
import PortfolioRenderer from './preview/PortfolioRenderer';

export default function LivePreviewPanel() {
  const { state } = usePortfolio();

  return (
    <div style={{ padding: 'var(--sp-5)' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 'var(--sp-4)', padding: '0 var(--sp-1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--success)',
            boxShadow: '0 0 8px rgba(34,197,94,0.5)',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{
            fontSize: 'var(--text-2xs)', fontWeight: 700,
            color: 'var(--text-tertiary)', textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            Live Preview
          </span>
        </div>
        <span style={{ fontSize: '9px', color: 'var(--text-quaternary)', fontFamily: 'var(--font-mono)' }}>
          {state.selectedLayout?.name} · {state.selectedPalette?.name}
        </span>
      </div>

      <div style={{
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-light)',
        background: '#fff',
      }}>
        <div style={{
          height: '28px', background: 'var(--bg-inset)', borderBottom: '1px solid var(--border-light)',
          display: 'flex', alignItems: 'center', padding: '0 10px', gap: '5px',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27C93F' }} />
        </div>

        <div style={{
          transform: 'scale(0.58)',
          transformOrigin: 'top left',
          width: '172.4%',
          minHeight: '900px',
        }}>
          <PortfolioRenderer data={state} />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
