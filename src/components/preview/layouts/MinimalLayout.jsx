export default function MinimalLayout({ data }) {
  const { personalInfo, socialLinks, skills, experience, education, projects, selectedPalette } = data;
  const p = selectedPalette || { primary: '#6366F1' };
  const name = `${personalInfo.firstName || 'Your'} ${personalInfo.lastName || 'Name'}`;
  const socialEntries = Object.entries(socialLinks).filter(([, v]) => v);

  const s = {
    page: { fontFamily: "'Inter', sans-serif", color: '#1E293B', background: '#fff', maxWidth: '720px', margin: '0 auto', padding: '80px 32px' },
    name: { fontFamily: "'Outfit', sans-serif", fontSize: '48px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '8px' },
    title: { fontSize: '18px', color: '#64748B', marginBottom: '32px' },
    divider: { width: '48px', height: '3px', background: p.primary, marginBottom: '32px', borderRadius: '2px' },
    section: { marginBottom: '48px' },
    sectionTitle: { fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: p.primary, marginBottom: '20px' },
    text: { fontSize: '15px', color: '#475569', lineHeight: 1.8 },
    card: { marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' },
    link: { color: p.primary, textDecoration: 'none', fontWeight: 600, fontSize: '14px' },
  };

  return (
    <div style={s.page}>
      <h1 style={s.name}>{name}</h1>
      {personalInfo.title && <p style={s.title}>{personalInfo.title}</p>}
      <div style={s.divider} />

      {personalInfo.bio && (
        <div style={s.section}>
          <p style={s.text}>{personalInfo.bio}</p>
        </div>
      )}

      {(personalInfo.email || personalInfo.location) && (
        <div style={s.section}>
          <p style={s.sectionTitle}>Contact</p>
          {personalInfo.email && <p style={{ ...s.text, marginBottom: '4px' }}>{personalInfo.email}</p>}
          {personalInfo.phone && <p style={{ ...s.text, marginBottom: '4px' }}>{personalInfo.phone}</p>}
          {personalInfo.location && <p style={s.text}>{personalInfo.location}</p>}
        </div>
      )}

      {skills.length > 0 && (
        <div style={s.section}>
          <p style={s.sectionTitle}>Skills</p>
          <p style={s.text}>{skills.join(' · ')}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={s.section}>
          <p style={s.sectionTitle}>Experience</p>
          {experience.map((exp, i) => (
            <div key={i} style={s.card}>
              <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '2px' }}>{exp.role}</p>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '8px' }}>{exp.company} · {exp.period}</p>
              {exp.description && <p style={s.text}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={s.section}>
          <p style={s.sectionTitle}>Education</p>
          {education.map((edu, i) => (
            <div key={i} style={s.card}>
              <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '2px' }}>{edu.degree}</p>
              <p style={{ fontSize: '13px', color: '#94A3B8' }}>{edu.school} · {edu.period}</p>
            </div>
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <div style={s.section}>
          <p style={s.sectionTitle}>Selected Work</p>
          {projects.map((proj, i) => (
            <div key={i} style={s.card}>
              <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>{proj.title}</p>
              {proj.description && <p style={{ ...s.text, marginBottom: '6px' }}>{proj.description}</p>}
              {proj.tech?.length > 0 && <p style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '6px' }}>{proj.tech.join(' · ')}</p>}
              <div style={{ display: 'flex', gap: '12px' }}>
                {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener" style={s.link}>View ↗</a>}
                {proj.repoUrl && <a href={proj.repoUrl} target="_blank" rel="noopener" style={{ ...s.link, color: '#64748B' }}>Code ↗</a>}
              </div>
            </div>
          ))}
        </div>
      )}

      {socialEntries.length > 0 && (
        <div style={s.section}>
          <p style={s.sectionTitle}>Find Me</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {socialEntries.map(([key, url]) => <a key={key} href={url} target="_blank" rel="noopener" style={s.link}>{key}</a>)}
          </div>
        </div>
      )}

      <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: `1px solid #E2E8F0`, textAlign: 'center', color: '#94A3B8', fontSize: '12px' }}>
        © {new Date().getFullYear()} {name}
      </div>
    </div>
  );
}
