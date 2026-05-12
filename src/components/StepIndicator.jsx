import { usePortfolio } from '../context/PortfolioContext';
import { User, Briefcase, FolderOpen, Link, Palette, Eye, Check } from 'lucide-react';
import './StepIndicator.css';

const ICONS = { user: User, briefcase: Briefcase, folder: FolderOpen, link: Link, palette: Palette, eye: Eye };

export default function StepIndicator({ steps, currentStep }) {
  const { setStep } = usePortfolio();

  return (
    <nav className="steps" id="step-indicator" aria-label="Form progress">
      <div className="steps-track">
        {steps.map((step, i) => {
          const Icon = ICONS[step.icon] || User;
          const isComplete = i < currentStep;
          const isActive = i === currentStep;

          return (
            <div key={i} className="steps-item-wrap">
              <button
                className={`steps-item ${isActive ? 'is-active' : ''} ${isComplete ? 'is-complete' : ''}`}
                onClick={() => setStep(i)}
                id={`step-${i}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="steps-dot">
                  {isComplete ? <Check size={12} strokeWidth={3} /> : <Icon size={13} />}
                </span>
                <span className="steps-label">{step.label}</span>
              </button>
              {i < steps.length - 1 && (
                <div className={`steps-line ${isComplete ? 'is-filled' : ''}`} />
              )}
            </div>
          );
        })}
      </div>

      <div className="steps-progress-track">
        <div
          className="steps-progress-fill"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </nav>
  );
}
