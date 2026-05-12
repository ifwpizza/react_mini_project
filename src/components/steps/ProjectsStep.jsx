import { useState, useRef } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ChevronRight, ChevronLeft, Plus, Trash2, FolderOpen, Upload, ExternalLink, Image } from 'lucide-react';
import './Steps.css';

export default function ProjectsStep() {
  const { state, addProject, removeProject, nextStep, prevStep } = usePortfolio();
  const [showForm, setShowForm] = useState(false);
  const [draft, setDraft] = useState({ title: '', description: '', tech: '', liveUrl: '', repoUrl: '', imageUrl: '' });
  const fileRef = useRef(null);

  const handleImage = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setDraft({ ...draft, imageUrl: e.target.result });
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (draft.title) {
      addProject({ ...draft, tech: draft.tech.split(',').map(t => t.trim()).filter(Boolean) });
      setDraft({ title: '', description: '', tech: '', liveUrl: '', repoUrl: '', imageUrl: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="step-view">
      <div className="step-header">
        <h2 className="step-title">Projects</h2>
        <p className="step-subtitle">Showcase your best work — add projects you're proud of.</p>
      </div>

      {!showForm && (
        <button className="btn btn-secondary" onClick={() => setShowForm(true)} style={{ marginBottom: 'var(--sp-6)' }} id="add-project-btn">
          <Plus size={15} /> Add Project
        </button>
      )}

      {showForm && (
        <div className="inline-form">
          <p className="inline-form-title"><FolderOpen size={15} /> New Project</p>

          <div
            className="image-upload-zone"
            onClick={() => fileRef.current?.click()}
          >
            {draft.imageUrl ? (
              <img src={draft.imageUrl} alt="Project" />
            ) : (
              <div className="image-upload-placeholder">
                <Image size={24} />
                <span>Upload project screenshot</span>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" onChange={(e) => handleImage(e.target.files[0])} style={{ display: 'none' }} />
          </div>

          <div className="form-grid">
            <div className="form-group full-width"><label className="form-label">Project Title</label><input className="form-input" placeholder="E-commerce Platform" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} /></div>
            <div className="form-group full-width"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="What does this project do? What problem does it solve?" value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} rows={3} /></div>
            <div className="form-group full-width"><label className="form-label">Technologies (comma-separated)</label><input className="form-input" placeholder="React, Node.js, MongoDB, Tailwind" value={draft.tech} onChange={(e) => setDraft({ ...draft, tech: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Live URL</label><input className="form-input" placeholder="https://myproject.com" value={draft.liveUrl} onChange={(e) => setDraft({ ...draft, liveUrl: e.target.value })} /></div>
            <div className="form-group"><label className="form-label">Repository URL</label><input className="form-input" placeholder="https://github.com/..." value={draft.repoUrl} onChange={(e) => setDraft({ ...draft, repoUrl: e.target.value })} /></div>
          </div>
          <div className="inline-form-actions">
            <button className="btn btn-primary btn-sm" onClick={handleSave}>Save Project</button>
            <button className="btn btn-ghost btn-sm" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="project-grid">
        {state.projects.map((proj, i) => (
          <div key={i} className="project-card">
            {proj.imageUrl && (
              <div className="project-card-img">
                <img src={proj.imageUrl} alt={proj.title} />
              </div>
            )}
            <div className="project-card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <p className="project-card-title">{proj.title}</p>
                <button className="btn btn-icon btn-ghost btn-sm" onClick={() => removeProject(i)} style={{ flexShrink: 0 }}><Trash2 size={13} /></button>
              </div>
              {proj.description && <p className="project-card-desc">{proj.description}</p>}
              {proj.tech?.length > 0 && (
                <div className="project-card-tags">
                  {proj.tech.map((t, j) => <span key={j} className="tag" style={{ fontSize: '10px', padding: '2px 8px' }}>{t}</span>)}
                </div>
              )}
              <div className="project-card-links">
                {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener" className="project-card-link"><ExternalLink size={11} /> Live</a>}
                {proj.repoUrl && <a href={proj.repoUrl} target="_blank" rel="noopener" className="project-card-link" style={{ color: 'var(--text-tertiary)' }}><ExternalLink size={11} /> Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {state.projects.length === 0 && !showForm && (
        <div className="empty-state"><FolderOpen size={28} /><p>No projects added yet — add your best work!</p></div>
      )}

      <div className="step-navigation">
        <button className="btn btn-secondary" onClick={prevStep}><ChevronLeft size={16} /> Back</button>
        <button className="btn btn-primary btn-lg" onClick={nextStep}>Continue <ChevronRight size={16} /></button>
      </div>
    </div>
  );
}
