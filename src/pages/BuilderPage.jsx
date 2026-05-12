import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Header from '../components/Header';
import StepIndicator from '../components/StepIndicator';
import PersonalInfoStep from '../components/steps/PersonalInfoStep';
import SkillsExperienceStep from '../components/steps/SkillsExperienceStep';
import ProjectsStep from '../components/steps/ProjectsStep';
import AppearanceStep from '../components/steps/AppearanceStep';
import SocialLinksStep from '../components/steps/SocialLinksStep';
import PreviewStep from '../components/steps/PreviewStep';
import LivePreviewPanel from '../components/LivePreviewPanel';

const STEPS = [
  { label: 'Personal', icon: 'user' },
  { label: 'Skills & Work', icon: 'briefcase' },
  { label: 'Projects', icon: 'folder' },
  { label: 'Social', icon: 'link' },
  { label: 'Appearance', icon: 'palette' },
  { label: 'Preview', icon: 'eye' },
];

export default function BuilderPage() {
  const { state } = usePortfolio();
  const [showPreview, setShowPreview] = useState(false);

  const renderStep = () => {
    switch (state.currentStep) {
      case 0: return <PersonalInfoStep />;
      case 1: return <SkillsExperienceStep />;
      case 2: return <ProjectsStep />;
      case 3: return <SocialLinksStep />;
      case 4: return <AppearanceStep />;
      case 5: return <PreviewStep />;
      default: return <PersonalInfoStep />;
    }
  };

  return (
    <>
      <Header showPreview={showPreview} setShowPreview={setShowPreview} />
      <div className="app-layout">
        <div className={`form-panel ${showPreview ? 'form-panel--with-preview' : ''}`}>
          <StepIndicator steps={STEPS} currentStep={state.currentStep} />
          <div className="form-content">{renderStep()}</div>
        </div>
        {showPreview && state.currentStep < 5 && (
          <div className="preview-panel">
            <LivePreviewPanel />
          </div>
        )}
      </div>
    </>
  );
}
