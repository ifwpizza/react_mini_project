import { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ChevronRight, ChevronLeft, Plus, X, Trash2, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import './Steps.css';

export default function SkillsExperienceStep() {
  const { state, addSkill, removeSkill, addExperience, removeExperience, addEducation, removeEducation, nextStep, prevStep } = usePortfolio();
  const [skillInput, setSkillInput] = useState('');
  const [showExpForm, setShowExpForm] = useState(false);
  const [showEduForm, setShowEduForm] = useState(false);
  const [expDraft, setExpDraft] = useState({ company: '', role: '', period: '', description: '' });
  const [eduDraft, setEduDraft] = useState({ school: '', degree: '', period: '', description: '' });

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !state.skills.includes(trimmed)) {
      addSkill(trimmed);
      setSkillInput('');
    }
  };

  const handleKeyDown = (e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } };

  const handleSaveExp = () => {
    if (expDraft.company && expDraft.role) {
      addExperience({ ...expDraft });
      setExpDraft({ company: '', role: '', period: '', description: '' });
      setShowExpForm(false);
    }
  };

  const handleSaveEdu = () => {
    if (eduDraft.school && eduDraft.degree) {
      addEducation({ ...eduDraft });
      setEduDraft({ school: '', degree: '', period: '', description: '' });
      setShowEduForm(false);
    }
  };

  return (
    <div className="step-view">
      <div className="step-header">
        <h2 className="step-title">Skills & Experience</h2>
        <p className="step-subtitle">Showcase your expertise and professional journey.</p>
      </div>

      {/* Skills */}
      <div className="section-block">
        <div className="section-block-header">
          <h3 className="section-block-title"><Sparkles size={16} /> Skills</h3>
        </div>
        <div className="skill-input-row">
          <input className="form-input" placeholder="e.g. React, Python, Figma..." value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={handleKeyDown} id="skill-input" />
          <button className="btn btn-primary btn-sm" onClick={handleAddSkill} id="add-skill-btn"><Plus size={14} /> Add</button>
        </div>
        <div className="skills-list">
          {state.skills.length === 0 && <span className="skills-empty">Type a skill and press Enter to add...</span>}
          {state.skills.map((skill, i) => (
            <span key={i} className="tag">
              {skill}
              <button className="tag-remove" onClick={() => removeSkill(i)}><X size={9} /></button>
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="section-block">
        <div className="section-block-header">
          <h3 className="section-block-title"><Briefcase size={16} /> Work Experience</h3>
          {!showExpForm && <button className="btn btn-secondary btn-sm" onClick={() => setShowExpForm(true)} id="add-exp-btn"><Plus size={13} /> Add</button>}
        </div>

        {showExpForm && (
          <div className="inline-form">
            <p className="inline-form-title"><Briefcase size={15} /> New Experience</p>
            <div className="form-grid">
              <div className="form-group"><label className="form-label">Company</label><input className="form-input" placeholder="Google" value={expDraft.company} onChange={(e) => setExpDraft({ ...expDraft, company: e.target.value })} /></div>
              <div className="form-group"><label className="form-label">Role</label><input className="form-input" placeholder="Senior Engineer" value={expDraft.role} onChange={(e) => setExpDraft({ ...expDraft, role: e.target.value })} /></div>
              <div className="form-group full-width"><label className="form-label">Period</label><input className="form-input" placeholder="Jan 2022 — Present" value={expDraft.period} onChange={(e) => setExpDraft({ ...expDraft, period: e.target.value })} /></div>
              <div className="form-group full-width"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="Key responsibilities and achievements..." value={expDraft.description} onChange={(e) => setExpDraft({ ...expDraft, description: e.target.value })} rows={3} /></div>
            </div>
            <div className="inline-form-actions">
              <button className="btn btn-primary btn-sm" onClick={handleSaveExp}>Save Entry</button>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowExpForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        {state.experience.map((exp, i) => (
          <div key={i} className="entry-card">
            <div className="entry-card-top">
              <div>
                <p className="entry-card-title">{exp.role}</p>
                <p className="entry-card-meta">{exp.company} · {exp.period}</p>
              </div>
              <button className="btn btn-icon btn-ghost" onClick={() => removeExperience(i)}><Trash2 size={14} /></button>
            </div>
            {exp.description && <p className="entry-card-desc">{exp.description}</p>}
          </div>
        ))}

        {state.experience.length === 0 && !showExpForm && (
          <div className="empty-state"><Briefcase size={28} /><p>No work experience added yet</p></div>
        )}
      </div>

      {/* Education */}
      <div className="section-block">
        <div className="section-block-header">
          <h3 className="section-block-title"><GraduationCap size={16} /> Education</h3>
          {!showEduForm && <button className="btn btn-secondary btn-sm" onClick={() => setShowEduForm(true)} id="add-edu-btn"><Plus size={13} /> Add</button>}
        </div>

        {showEduForm && (
          <div className="inline-form">
            <p className="inline-form-title"><GraduationCap size={15} /> New Education</p>
            <div className="form-grid">
              <div className="form-group"><label className="form-label">School / University</label><input className="form-input" placeholder="MIT" value={eduDraft.school} onChange={(e) => setEduDraft({ ...eduDraft, school: e.target.value })} /></div>
              <div className="form-group"><label className="form-label">Degree</label><input className="form-input" placeholder="B.S. Computer Science" value={eduDraft.degree} onChange={(e) => setEduDraft({ ...eduDraft, degree: e.target.value })} /></div>
              <div className="form-group full-width"><label className="form-label">Period</label><input className="form-input" placeholder="2018 — 2022" value={eduDraft.period} onChange={(e) => setEduDraft({ ...eduDraft, period: e.target.value })} /></div>
              <div className="form-group full-width"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="Achievements, GPA, clubs..." value={eduDraft.description} onChange={(e) => setEduDraft({ ...eduDraft, description: e.target.value })} rows={2} /></div>
            </div>
            <div className="inline-form-actions">
              <button className="btn btn-primary btn-sm" onClick={handleSaveEdu}>Save Entry</button>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowEduForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        {state.education.map((edu, i) => (
          <div key={i} className="entry-card">
            <div className="entry-card-top">
              <div>
                <p className="entry-card-title">{edu.degree}</p>
                <p className="entry-card-meta">{edu.school} · {edu.period}</p>
              </div>
              <button className="btn btn-icon btn-ghost" onClick={() => removeEducation(i)}><Trash2 size={14} /></button>
            </div>
            {edu.description && <p className="entry-card-desc">{edu.description}</p>}
          </div>
        ))}

        {state.education.length === 0 && !showEduForm && (
          <div className="empty-state"><GraduationCap size={28} /><p>No education added yet</p></div>
        )}
      </div>

      <div className="step-navigation">
        <button className="btn btn-secondary" onClick={prevStep}><ChevronLeft size={16} /> Back</button>
        <button className="btn btn-primary btn-lg" onClick={nextStep}>Continue <ChevronRight size={16} /></button>
      </div>
    </div>
  );
}
