// ResumeEditor.jsx (только измененные части)

const RenderSectionEditor = (section, index) => {
  const commonProps = {
    key: section.id,
    data: section.data,
    onChange: (newData) => updateSection(section.id, newData),
    onDelete: () => deleteSection(section.id),
    styles: styles,
  };

  return (
    <div style={styles.section}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={styles.moveButtons}>
          <button
            style={styles.moveButton}
            onClick={() => moveSection(index, index - 1)}
            disabled={index === 0}
          >
            ↑ Вверх
          </button>
          <button
            style={styles.moveButton}
            onClick={() => moveSection(index, index + 1)}
            disabled={index === sections.length - 1}
          >
            ↓ Вниз
          </button>
        </div>
        <button
          style={styles.deleteButton}
          onClick={() => deleteSection(section.id)}
        >
          Удалить
        </button>
      </div>

      {section.type === "experience" && <ExperienceSection {...commonProps} />}
      {section.type === "education" && <EducationSection {...commonProps} />}
      {section.type === "skills" && <SkillsSection {...commonProps} />}
      {section.type === "certificates" && (
        <CertificatesSection {...commonProps} />
      )}
      {section.type === "about" && <AboutSection {...commonProps} />}
    </div>
  );
};

export default RenderSectionEditor;
