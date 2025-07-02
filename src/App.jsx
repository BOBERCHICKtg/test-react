import React, { useState, useEffect } from "react";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import EducationSection from "./components/EducationSection/EducationSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import CertificatesSection from "./components/CertificatesSection/CertificatesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ResumePreview from "./components/ResumePreview/ResumePreview";

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  editor: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRight: "1px solid #dee2e6",
    overflowY: "auto",
  },
  preview: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "inset 2px 0 5px rgba(0,0,0,0.05)",
    overflowY: "auto",
  },
  section: {
    backgroundColor: "white",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    position: "relative",
  },
  resume: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px",
    border: "1px solid #e9ecef",
    backgroundColor: "white",
    boxShadow: "0 0 15px rgba(0,0,0,0.05)",
  },
  header: {
    borderBottom: "2px solid #0d6efd",
    paddingBottom: "15px",
    marginBottom: "25px",
    color: "#212529",
  },
  sectionTitle: {
    color: "#0d6efd",
    borderBottom: "1px solid #e9ecef",
    paddingBottom: "8px",
    marginTop: "25px",
    fontSize: "1.25rem",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
    fontSize: "1rem",
    transition: "all 0.2s ease",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "6px 12px",
    cursor: "pointer",
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "0.875rem",
    transition: "all 0.2s ease",
  },
  moveButtons: {
    display: "flex",
    gap: "8px",
    marginBottom: "15px",
  },
  moveButton: {
    padding: "6px 12px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.875rem",
    transition: "all 0.2s ease",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0 16px",
    border: "1px solid #ced4da",
    borderRadius: "6px",
    fontSize: "1rem",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "8px 0 16px",
    border: "1px solid #ced4da",
    borderRadius: "6px",
    minHeight: "100px",
    fontSize: "1rem",
    resize: "vertical",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
    color: "#495057",
  },
};

const ResumeEditor = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
  });

  const [sections, setSections] = useState([]);
  const [showAddSection, setShowAddSection] = useState(false);

  useEffect(() => {
    const savedResume = localStorage.getItem("resumeData");
    if (savedResume) {
      const { personalInfo: savedPersonalInfo, sections: savedSections } =
        JSON.parse(savedResume);
      setPersonalInfo(savedPersonalInfo);
      setSections(savedSections);
    }
  }, []);

  useEffect(() => {
    const resumeData = { personalInfo, sections };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [personalInfo, sections]);

  const addSection = (type) => {
    const newSection = {
      id: Date.now().toString(),
      type,
      data: {},
    };
    setSections([...sections, newSection]);
    setShowAddSection(false);
  };

  const updateSection = (id, newData) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, data: newData } : section
      )
    );
  };

  const deleteSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const moveSection = (fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= sections.length) return;

    const newSections = [...sections];
    const [movedSection] = newSections.splice(fromIndex, 1);
    newSections.splice(toIndex, 0, movedSection);

    setSections(newSections);
  };

  const renderSectionEditor = (section, index) => {
    const commonProps = {
      key: section.id,
      data: section.data,
      onChange: (newData) => updateSection(section.id, newData),
      onDelete: () => deleteSection(section.id),
      styles: styles,
    };

    return (
      <div style={styles.section}>
        <div style={styles.moveButtons}>
          <button
            style={{
              ...styles.moveButton,
              backgroundColor: index === 0 ? "#ced4da" : "#6c757d",
            }}
            onClick={() => moveSection(index, index - 1)}
            disabled={index === 0}
          >
            ↑ Вверх
          </button>
          <button
            style={{
              ...styles.moveButton,
              backgroundColor:
                index === sections.length - 1 ? "#ced4da" : "#6c757d",
            }}
            onClick={() => moveSection(index, index + 1)}
            disabled={index === sections.length - 1}
          >
            ↓ Вниз
          </button>
        </div>

        {section.type === "experience" && (
          <ExperienceSection {...commonProps} />
        )}
        {section.type === "education" && <EducationSection {...commonProps} />}
        {section.type === "skills" && <SkillsSection {...commonProps} />}
        {section.type === "certificates" && (
          <CertificatesSection {...commonProps} />
        )}
        {section.type === "about" && <AboutSection {...commonProps} />}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.editor}>
        <div style={styles.section}>
          <h2 style={styles.header}>Персональная информация</h2>
          <div>
            <label style={styles.label}>ФИО</label>
            <input
              style={styles.input}
              value={personalInfo.name}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
            />
          </div>
          <div>
            <label style={styles.label}>Должность</label>
            <input
              style={styles.input}
              value={personalInfo.title}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, title: e.target.value })
              }
            />
          </div>
          <div>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
            />
          </div>
          <div>
            <label style={styles.label}>Телефон</label>
            <input
              style={styles.input}
              value={personalInfo.phone}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, phone: e.target.value })
              }
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={styles.header}>Секции резюме</h2>
          <button
            style={{
              ...styles.addButton,
              backgroundColor: showAddSection ? "#6c757d" : "#0d6efd",
            }}
            onClick={() => setShowAddSection(!showAddSection)}
          >
            {showAddSection ? "Скрыть" : "Добавить секцию"}
          </button>
        </div>

        {showAddSection && (
          <div
            style={{
              ...styles.section,
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={styles.addButton}
              onClick={() => addSection("experience")}
            >
              Опыт работы
            </button>
            <button
              style={styles.addButton}
              onClick={() => addSection("education")}
            >
              Образование
            </button>
            <button
              style={styles.addButton}
              onClick={() => addSection("skills")}
            >
              Навыки
            </button>
            <button
              style={styles.addButton}
              onClick={() => addSection("certificates")}
            >
              Сертификаты
            </button>
            <button
              style={styles.addButton}
              onClick={() => addSection("about")}
            >
              О себе
            </button>
          </div>
        )}

        {sections.map((section, index) => (
          <React.Fragment key={section.id}>
            {renderSectionEditor(section, index)}
          </React.Fragment>
        ))}
      </div>

      <div style={styles.preview}>
        <h2 style={{ ...styles.header, textAlign: "center" }}>
          Предпросмотр резюме
        </h2>
        <ResumePreview
          personalInfo={personalInfo}
          sections={sections}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default ResumeEditor;
