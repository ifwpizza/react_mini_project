import { usePortfolio } from '../../context/PortfolioContext';
import { ChevronRight, ChevronLeft, Globe, Link, User, MessageCircle, Camera, PenTool } from 'lucide-react';
import './Steps.css';

const SOCIAL_FIELDS = [
  { key: 'github', label: 'GitHub', icon: Link, placeholder: 'https://github.com/username' },
  { key: 'linkedin', label: 'LinkedIn', icon: User, placeholder: 'https://linkedin.com/in/username' },
  { key: 'twitter', label: 'Twitter / X', icon: MessageCircle, placeholder: 'https://twitter.com/username' },
  { key: 'website', label: 'Website', icon: Globe, placeholder: 'https://yoursite.dev' },
  { key: 'dribbble', label: 'Dribbble', icon: PenTool, placeholder: 'https://dribbble.com/username' },
  { key: 'instagram', label: 'Instagram', icon: Camera, placeholder: 'https://instagram.com/username' },
];

export default function SocialLinksStep() {
  const { state, updateSocialLinks, nextStep, prevStep } = usePortfolio();

  return (
    <div className="step-view">
      <div className="step-header">
        <h2 className="step-title">Social & Links</h2>
        <p className="step-subtitle">Connect your online presence — add your profiles and website.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
        {SOCIAL_FIELDS.map(({ key, label, icon: Icon, placeholder }) => (
          <div key={key}>
            <p className="social-field-label">{label}</p>
            <div className="social-field">
              <div className="social-field-icon"><Icon size={15} /></div>
              <input
                className="social-field-input"
                placeholder={placeholder}
                value={state.socialLinks[key]}
                onChange={(e) => updateSocialLinks({ [key]: e.target.value })}
                id={`input-social-${key}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="step-navigation">
        <button className="btn btn-secondary" onClick={prevStep}><ChevronLeft size={16} /> Back</button>
        <button className="btn btn-primary btn-lg" onClick={nextStep}>Continue <ChevronRight size={16} /></button>
      </div>
    </div>
  );
}
