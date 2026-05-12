export default function CreativeLayout({ data }) {
  const { personalInfo, socialLinks, skills, experience, education, projects, selectedPalette } = data;
  const p = selectedPalette || { primary: '#6366F1', secondary: '#818CF8', bg: '#0B0F1A' };
  const name = `${personalInfo.firstName || 'Your'} ${personalInfo.lastName || 'Name'}`;
  const socialEntries = Object.entries(socialLinks).filter(([, v]) => v);

  const s = {
    page: { fontFamily: "'Inter', sans-serif", background: p.bg, color: '#E2E8F0', minHeight: '100vh' },
    hero: { padding: '100px 48px 60px', position: 'relative' },
    heroInner: { maxWidth: '800px' },
    eyebrow: { fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: p.primary, marginBottom: '16px' },
    heroName: { fontFamily: "'Outfit', sans-serif", fontSize: '56px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px', background: `linear-gradient(135deg, ${p.primary}, ${p.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    heroTitle: { fontSize: '20px', color: '#94A3B8', marginBottom: '24px' },
    heroBio: { fontSize: '15px', color: '#64748B', lineHeight: 1.8, maxWidth: '560px' },
    section: { padding: '48px', borderTop: `1px solid ${p.primary}20` },
    sectionTitle: { fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: 700, marginBottom: '28px', color: '#F1F5F9' },
    accent: { display: 'inline-block', width: '32px', height: '4px', background: `linear-gradient(90deg, ${p.primary}, ${p.secondary})`, borderRadius: '2px', marginBottom: '16px' },
    tag: { display: 'inline-block', padding: '6px 14px', borderRadius: '6px', background: `${p.primary}20`, color: p.secondary, fontSize: '13px', fontWeight: 600, margin: '4px', border: `1px solid ${p.primary}30` },
    card: { background: `${p.primary}08`, borderRadius: '12px', padding: '20px', marginBottom: '14px', border: `1px solid ${p.primary}15` },
    projGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' },
  };

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={{ position: 'absolute', top: '60px', right: '48px' }}>
          {personalInfo.avatarUrl && <img src={personalInfo.avatarUrl} alt={name} style={{ width: '140px', height: '140px', borderRadius: '16px', objectFit: 'cover', border: `3px solid ${p.primary}40` }} />}
        </div>
        <div style={s.heroInner}>
          <div style={s.accent} />
          <p style={s.eyebrow}>Portfolio</p>
          <h1 style={s.heroName}>{name}</h1>
          {personalInfo.title && <p style={s.heroTitle}>{personalInfo.title}</p>}
          {personalInfo.bio && <p style={s.heroBio}>{personalInfo.bio}</p>}
          {socialEntries.length > 0 && (
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
              {socialEntries.map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener" style={{ padding: '8px 16px', borderRadius: '8px', border: `1px solid ${p.primary}40`, color: p.secondary, fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>{key}</a>
              ))}
            </div>
          )}
        </div>
      </div>

      {skills.length > 0 && (
        <div style={s.section}>
          <div style={s.accent} />
          <h2 style={s.sectionTitle}>Skills & Tools</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {skills.map((sk, i) => <span key={i} style={s.tag}>{sk}</span>)}
          </div>
        </div>
      )}

      {experience.length > 0 && (
        <div style={s.section}>
          <div style={s.accent} />
          <h2 style={s.sectionTitle}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={s.card}>
              <p style={{ fontWeight: 700, fontSize: '16px', color: '#F1F5F9' }}>{exp.role}</p>
              <p style={{ fontSize: '12px', color: p.secondary, marginBottom: '6px' }}>{exp.company} · {exp.period}</p>
              {exp.description && <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.7 }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={s.section}>
          <div style={s.accent} />
          <h2 style={s.sectionTitle}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={s.card}>
              <p style={{ fontWeight: 700, fontSize: '16px', color: '#F1F5F9' }}>{edu.degree}</p>
              <p style={{ fontSize: '12px', color: p.secondary }}>{edu.school} · {edu.period}</p>
            </div>
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <div style={s.section}>
          <div style={s.accent} />
          <h2 style={s.sectionTitle}>Projects</h2>
          <div style={s.projGrid}>
            {projects.map((proj, i) => (
              <div key={i} style={{ ...s.card, padding: 0, overflow: 'hidden' }}>
                {proj.imageUrl && <img src={proj.imageUrl} alt={proj.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />}
                <div style={{ padding: '16px' }}>
                  <p style={{ fontWeight: 700, fontSize: '15px', color: '#F1F5F9', marginBottom: '4px' }}>{proj.title}</p>
                  {proj.description && <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '8px', lineHeight: 1.6 }}>{proj.description}</p>}
                  {proj.tech?.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>{proj.tech.map((t, j) => <span key={j} style={{ ...s.tag, fontSize: '10px', padding: '2px 6px' }}>{t}</span>)}</div>}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener" style={{ color: p.secondary, fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>Live ↗</a>}
                    {proj.repoUrl && <a href={proj.repoUrl} target="_blank" rel="noopener" style={{ color: '#64748B', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>Code ↗</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ padding: '32px 48px', textAlign: 'center', color: '#475569', fontSize: '12px', borderTop: `1px solid ${p.primary}15` }}>
        © {new Date().getFullYear()} {name}. Crafted with care.
      </div>
    </div>
  );
}
