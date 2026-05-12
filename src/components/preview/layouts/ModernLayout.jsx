export default function ModernLayout({ data }) {
  const { personalInfo, socialLinks, skills, experience, education, projects, selectedPalette } = data;
  const p = selectedPalette || { primary: '#6366F1', secondary: '#818CF8', accent: '#4F46E5', bg: '#0B0F1A' };
  const name = `${personalInfo.firstName || 'Your'} ${personalInfo.lastName || 'Name'}`;
  const socialEntries = Object.entries(socialLinks).filter(([, v]) => v);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1E293B', background: '#fff', lineHeight: 1.6 }}>
      {/* Hero */}
      <div style={{
        background: `linear-gradient(160deg, ${p.primary} 0%, ${p.secondary} 60%, ${p.accent} 100%)`,
        color: '#fff', padding: '72px 48px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-40px', width: '200px', height: '200px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none',
        }} />
        {personalInfo.avatarUrl && (
          <img src={personalInfo.avatarUrl} alt={name} style={{
            width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover',
            border: '3px solid rgba(255,255,255,0.25)', marginBottom: '20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          }} />
        )}
        <h1 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: '38px', fontWeight: 800,
          letterSpacing: '-0.025em', marginBottom: '6px', lineHeight: 1.15,
        }}>{name}</h1>
        {personalInfo.title && <p style={{ fontSize: '17px', opacity: 0.88, fontWeight: 400, marginBottom: '14px' }}>{personalInfo.title}</p>}
        {personalInfo.bio && <p style={{ fontSize: '14px', opacity: 0.72, maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>{personalInfo.bio}</p>}
        {socialEntries.length > 0 && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
            {socialEntries.map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener" style={{
                padding: '6px 14px', borderRadius: '20px', background: 'rgba(255,255,255,0.15)',
                color: '#fff', fontSize: '12px', fontWeight: 600, textDecoration: 'none',
                backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)',
                transition: 'background 0.2s',
              }}>{key}</a>
            ))}
          </div>
        )}
      </div>

      {/* Contact Bar */}
      {(personalInfo.email || personalInfo.phone || personalInfo.location) && (
        <div style={{
          display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap',
          padding: '16px 48px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0',
          fontSize: '13px', color: '#64748B',
        }}>
          {personalInfo.email && <span>✉ {personalInfo.email}</span>}
          {personalInfo.phone && <span>☎ {personalInfo.phone}</span>}
          {personalInfo.location && <span>📍 {personalInfo.location}</span>}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ padding: '40px 48px', borderBottom: '1px solid #F1F5F9' }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '18px', color: '#0F172A' }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {skills.map((sk, i) => (
              <span key={i} style={{
                padding: '5px 14px', borderRadius: '20px', background: `${p.primary}10`,
                color: p.primary, fontSize: '13px', fontWeight: 600, border: `1px solid ${p.primary}20`,
              }}>{sk}</span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ padding: '40px 48px', borderBottom: '1px solid #F1F5F9' }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '18px', color: '#0F172A' }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{
              padding: '18px', background: '#FAFBFE', borderRadius: '12px',
              marginBottom: '10px', borderLeft: `3px solid ${p.primary}`,
            }}>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#0F172A', marginBottom: '2px' }}>{exp.role}</p>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '6px' }}>{exp.company} · {exp.period}</p>
              {exp.description && <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.65 }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ padding: '40px 48px', borderBottom: '1px solid #F1F5F9' }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '18px', color: '#0F172A' }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{
              padding: '18px', background: '#FAFBFE', borderRadius: '12px', marginBottom: '10px',
            }}>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#0F172A', marginBottom: '2px' }}>{edu.degree}</p>
              <p style={{ fontSize: '12px', color: '#94A3B8' }}>{edu.school} · {edu.period}</p>
              {edu.description && <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.65, marginTop: '4px' }}>{edu.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ padding: '40px 48px', borderBottom: '1px solid #F1F5F9' }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '18px', color: '#0F172A' }}>Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {projects.map((proj, i) => (
              <div key={i} style={{
                borderRadius: '12px', overflow: 'hidden', border: '1px solid #E2E8F0',
                background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}>
                {proj.imageUrl && <img src={proj.imageUrl} alt={proj.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />}
                <div style={{ padding: '16px' }}>
                  <p style={{ fontWeight: 700, fontSize: '15px', color: '#0F172A', marginBottom: '4px' }}>{proj.title}</p>
                  {proj.description && <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.6, marginBottom: '8px' }}>{proj.description}</p>}
                  {proj.tech?.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                      {proj.tech.map((t, j) => <span key={j} style={{ padding: '2px 8px', borderRadius: '10px', background: `${p.primary}10`, color: p.primary, fontSize: '10px', fontWeight: 600 }}>{t}</span>)}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener" style={{ color: p.primary, fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>Live ↗</a>}
                    {proj.repoUrl && <a href={proj.repoUrl} target="_blank" rel="noopener" style={{ color: '#94A3B8', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>Code ↗</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ padding: '28px 48px', textAlign: 'center', background: p.bg, color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
        © {new Date().getFullYear()} {name}
      </div>
    </div>
  );
}
