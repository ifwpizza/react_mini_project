export default function SplitLayout({ data }) {
  const { personalInfo, socialLinks, skills, experience, education, projects, selectedPalette } = data;
  const p = selectedPalette || { primary: '#6366F1', secondary: '#818CF8' };
  const name = `${personalInfo.firstName || 'Your'} ${personalInfo.lastName || 'Name'}`;
  const socialEntries = Object.entries(socialLinks).filter(([, v]) => v);

  const s = {
    wrapper: { display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: '#1E293B', background: '#fff' },
    sidebar: { width: '320px', flexShrink: 0, background: p.primary, color: '#fff', padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
    main: { flex: 1, padding: '48px', overflowY: 'auto' },
    avatar: { width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.3)', marginBottom: '20px' },
    name: { fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: 800, marginBottom: '8px' },
    title: { fontSize: '14px', opacity: 0.85, marginBottom: '24px' },
    divider: { width: '40px', height: '2px', background: 'rgba(255,255,255,0.3)', margin: '16px auto' },
    sideLabel: { fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.7, marginBottom: '8px', marginTop: '16px' },
    sideItem: { fontSize: '13px', opacity: 0.9, marginBottom: '4px' },
    sectionTitle: { fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '20px', color: '#0F172A', borderBottom: `2px solid ${p.primary}`, paddingBottom: '8px', display: 'inline-block' },
    section: { marginBottom: '40px' },
    card: { background: '#F8FAFC', borderRadius: '10px', padding: '16px', marginBottom: '12px', borderLeft: `3px solid ${p.primary}` },
  };

  return (
    <div style={s.wrapper}>
      <div style={s.sidebar}>
        {personalInfo.avatarUrl && <img src={personalInfo.avatarUrl} alt={name} style={s.avatar} />}
        <h1 style={s.name}>{name}</h1>
        {personalInfo.title && <p style={s.title}>{personalInfo.title}</p>}
        <div style={s.divider} />

        {personalInfo.email && <><p style={s.sideLabel}>Email</p><p style={s.sideItem}>{personalInfo.email}</p></>}
        {personalInfo.phone && <><p style={s.sideLabel}>Phone</p><p style={s.sideItem}>{personalInfo.phone}</p></>}
        {personalInfo.location && <><p style={s.sideLabel}>Location</p><p style={s.sideItem}>{personalInfo.location}</p></>}

        {skills.length > 0 && (
          <>
            <div style={s.divider} />
            <p style={s.sideLabel}>Skills</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
              {skills.map((sk, i) => <span key={i} style={{ padding: '4px 10px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 600 }}>{sk}</span>)}
            </div>
          </>
        )}

        {socialEntries.length > 0 && (
          <>
            <div style={s.divider} />
            <p style={s.sideLabel}>Links</p>
            {socialEntries.map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener" style={{ ...s.sideItem, display: 'block', color: '#fff', textDecoration: 'underline', opacity: 0.85 }}>{key}</a>
            ))}
          </>
        )}
      </div>

      <div style={s.main}>
        {personalInfo.bio && (
          <div style={s.section}>
            <h2 style={s.sectionTitle}>About Me</h2>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7 }}>{personalInfo.bio}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div style={s.section}>
            <h2 style={s.sectionTitle}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={s.card}>
                <p style={{ fontWeight: 700, fontSize: '15px' }}>{exp.role}</p>
                <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '6px' }}>{exp.company} · {exp.period}</p>
                {exp.description && <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div style={s.section}>
            <h2 style={s.sectionTitle}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={s.card}>
                <p style={{ fontWeight: 700, fontSize: '15px' }}>{edu.degree}</p>
                <p style={{ fontSize: '12px', color: '#64748B' }}>{edu.school} · {edu.period}</p>
              </div>
            ))}
          </div>
        )}

        {projects.length > 0 && (
          <div style={s.section}>
            <h2 style={s.sectionTitle}>Projects</h2>
            {projects.map((proj, i) => (
              <div key={i} style={{ ...s.card, borderLeft: `3px solid ${p.secondary}` }}>
                <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{proj.title}</p>
                {proj.description && <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, marginBottom: '6px' }}>{proj.description}</p>}
                {proj.tech?.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {proj.tech.map((t, j) => <span key={j} style={{ padding: '2px 8px', borderRadius: '10px', background: `${p.primary}15`, color: p.primary, fontSize: '11px', fontWeight: 600 }}>{t}</span>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
