import React from "react";

const renderSectionEditor = () => {
  const commonProps = {
    key: section.id,
    data: section.data,
    onChange: (newData) => updateSection(section.id, newData),
    onDelete: () => deleteSection(section.id),
  };

  return (
    <div>
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

export default renderSectionEditor;
