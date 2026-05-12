import { usePortfolio } from '../../context/PortfolioContext';
import { ChevronRight, Upload, Camera } from 'lucide-react';
import { useState, useRef } from 'react';
import './Steps.css';

export default function PersonalInfoStep() {
  const { state, updatePersonalInfo, nextStep } = usePortfolio();
  const { personalInfo } = state;
  const fileRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (field) => (e) => {
    updatePersonalInfo({ [field]: e.target.value });
  };

  const handleAvatar = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => updatePersonalInfo({ avatarUrl: e.target.result });
    reader.readAsDataURL(file);
  };

  return (
    <div className="step-view">
      <div className="step-header">
        <h2 className="step-title">Personal Information</h2>
        <p className="step-subtitle">Let's start with the basics — tell us about yourself.</p>
      </div>

      {/* Avatar */}
      <div className="avatar-section">
        <div
          className={`avatar-upload ${dragActive ? 'avatar-upload--drag' : ''} ${personalInfo.avatarUrl ? 'avatar-upload--has-image' : ''}`}
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => { e.preventDefault(); setDragActive(false); handleAvatar(e.dataTransfer.files[0]); }}
          id="avatar-upload"
        >
          {personalInfo.avatarUrl ? (
            <>
              <img src={personalInfo.avatarUrl} alt="Avatar" className="avatar-img" />
              <div className="avatar-overlay"><Camera size={18} /><span>Change</span></div>
            </>
          ) : (
            <div className="avatar-empty">
              <div className="avatar-icon-ring"><Upload size={20} /></div>
              <span className="avatar-label">Upload photo</span>
              <span className="avatar-hint">or drag & drop</span>
            </div>
          )}
          <input ref={fileRef} type="file" accept="image/*" onChange={(e) => handleAvatar(e.target.files[0])} style={{ display: 'none' }} />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input className="form-input" placeholder="John" value={personalInfo.firstName} onChange={handleChange('firstName')} id="input-firstName" />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input className="form-input" placeholder="Doe" value={personalInfo.lastName} onChange={handleChange('lastName')} id="input-lastName" />
        </div>
        <div className="form-group full-width">
          <label className="form-label">Professional Title</label>
          <input className="form-input" placeholder="Full-Stack Developer & UI Designer" value={personalInfo.title} onChange={handleChange('title')} id="input-title" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" placeholder="john@example.com" value={personalInfo.email} onChange={handleChange('email')} id="input-email" />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input className="form-input" type="tel" placeholder="+1 (555) 000-0000" value={personalInfo.phone} onChange={handleChange('phone')} id="input-phone" />
        </div>
        <div className="form-group full-width">
          <label className="form-label">Location</label>
          <input className="form-input" placeholder="San Francisco, CA" value={personalInfo.location} onChange={handleChange('location')} id="input-location" />
        </div>
        <div className="form-group full-width">
          <label className="form-label">Bio / About</label>
          <textarea className="form-textarea" placeholder="Write a compelling summary about yourself, your passions, and what drives you..." value={personalInfo.bio} onChange={handleChange('bio')} rows={4} id="input-bio" />
        </div>
      </div>

      <div className="step-navigation">
        <div />
        <button className="btn btn-primary btn-lg" onClick={nextStep} id="next-step-btn">
          Continue <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
