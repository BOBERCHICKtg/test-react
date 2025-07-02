import React, { useState, useEffect } from "react";

// Стили компонентов
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  editor: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRight: "1px solid #ddd",
  },
  preview: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  section: {
    backgroundColor: "white",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "relative",
  },
  resume: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px",
    border: "1px solid #ddd",
    backgroundColor: "white",
  },
  header: {
    borderBottom: "2px solid #3498db",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  sectionTitle: {
    color: "#3498db",
    borderBottom: "1px solid #eee",
    paddingBottom: "5px",
    marginTop: "20px",
  },
  addButton: {
    padding: "10px 15px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "3px",
    padding: "5px 10px",
    cursor: "pointer",
    position: "absolute",
    top: "15px",
    right: "15px",
  },
  moveButtons: {
    display: "flex",
    gap: "5px",
    marginBottom: "10px",
  },
  moveButton: {
    padding: "5px 10px",
    backgroundColor: "#95a5a6",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0 15px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    margin: "5px 0 15px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    minHeight: "60px",
  },
};

// Компонент секции "Опыт работы"
const ExperienceSection = ({ data, onChange, onDelete }) => {
  return (
    <div style={styles.section}>
      <button style={styles.deleteButton} onClick={onDelete}>
        Удалить
      </button>
      <h3>Опыт работы</h3>
      <div>
        <label>Должность</label>
        <input
          style={styles.input}
          value={data.position || ""}
          onChange={(e) => onChange({ ...data, position: e.target.value })}
        />
      </div>
      <div>
        <label>Компания</label>
        <input
          style={styles.input}
          value={data.company || ""}
          onChange={(e) => onChange({ ...data, company: e.target.value })}
        />
      </div>
      <div>
        <label>Период</label>
        <input
          style={styles.input}
          value={data.period || ""}
          onChange={(e) => onChange({ ...data, period: e.target.value })}
        />
      </div>
      <div>
        <label>Описание</label>
        <textarea
          style={styles.textarea}
          value={data.description || ""}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
        />
      </div>
    </div>
  );
};

// Компонент секции "Образование"
const EducationSection = ({ data, onChange, onDelete }) => {
  return (
    <div style={styles.section}>
      <button style={styles.deleteButton} onClick={onDelete}>
        Удалить
      </button>
      <h3>Образование</h3>
      <div>
        <label>Учебное заведение</label>
        <input
          style={styles.input}
          value={data.institution || ""}
          onChange={(e) => onChange({ ...data, institution: e.target.value })}
        />
      </div>
      <div>
        <label>Специальность</label>
        <input
          style={styles.input}
          value={data.specialty || ""}
          onChange={(e) => onChange({ ...data, specialty: e.target.value })}
        />
      </div>
      <div>
        <label>Период</label>
        <input
          style={styles.input}
          value={data.period || ""}
          onChange={(e) => onChange({ ...data, period: e.target.value })}
        />
      </div>
    </div>
  );
};

// Компонент секции "Навыки"
const SkillsSection = ({ data, onChange, onDelete }) => {
  return (
    <div style={styles.section}>
      <button style={styles.deleteButton} onClick={onDelete}>
        Удалить
      </button>
      <h3>Навыки</h3>
      <div>
        <label>Список навыков (через запятую)</label>
        <input
          style={styles.input}
          value={data.skills || ""}
          onChange={(e) => onChange({ ...data, skills: e.target.value })}
          placeholder="HTML, CSS, JavaScript, React"
        />
      </div>
    </div>
  );
};

// Компонент секции "Сертификаты"
const CertificatesSection = ({ data, onChange, onDelete }) => {
  return (
    <div style={styles.section}>
      <button style={styles.deleteButton} onClick={onDelete}>
        Удалить
      </button>
      <h3>Сертификаты</h3>
      <div>
        <label>Название сертификата</label>
        <input
          style={styles.input}
          value={data.name || ""}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
        />
      </div>
      <div>
        <label>Организация</label>
        <input
          style={styles.input}
          value={data.organization || ""}
          onChange={(e) => onChange({ ...data, organization: e.target.value })}
        />
      </div>
      <div>
        <label>Год получения</label>
        <input
          style={styles.input}
          value={data.year || ""}
          onChange={(e) => onChange({ ...data, year: e.target.value })}
        />
      </div>
    </div>
  );
};

// Компонент секции "О себе"
const AboutSection = ({ data, onChange, onDelete }) => {
  return (
    <div style={styles.section}>
      <button style={styles.deleteButton} onClick={onDelete}>
        Удалить
      </button>
      <h3>О себе</h3>
      <div>
        <label>Информация о себе</label>
        <textarea
          style={styles.textarea}
          value={data.content || ""}
          onChange={(e) => onChange({ ...data, content: e.target.value })}
        />
      </div>
    </div>
  );
};

// Компонент предпросмотра резюме
const ResumePreview = ({ personalInfo, sections }) => {
  return (
    <div style={styles.resume}>
      <div style={styles.header}>
        <h1>{personalInfo.name || "Ваше имя"}</h1>
        <p>{personalInfo.title || "Ваша должность"}</p>
        <p>
          {personalInfo.email || "email@example.com"} |{" "}
          {personalInfo.phone || "+7 (123) 456-7890"}
        </p>
      </div>

      {sections.map((section, index) => {
        switch (section.type) {
          case "experience":
            return (
              <div key={index}>
                <h2 style={styles.sectionTitle}>Опыт работы</h2>
                <h3>{section.data.position || "Должность"}</h3>
                <p>
                  <strong>{section.data.company || "Компания"}</strong> |{" "}
                  {section.data.period || "Период"}
                </p>
                <p>
                  {section.data.description ||
                    "Описание ваших обязанностей и достижений."}
                </p>
              </div>
            );
          case "education":
            return (
              <div key={index}>
                <h2 style={styles.sectionTitle}>Образование</h2>
                <h3>{section.data.institution || "Учебное заведение"}</h3>
                <p>
                  <strong>{section.data.specialty || "Специальность"}</strong> |{" "}
                  {section.data.period || "Период"}
                </p>
              </div>
            );
          case "skills":
            return (
              <div key={index}>
                <h2 style={styles.sectionTitle}>Навыки</h2>
                <ul>
                  {(section.data.skills || "Навык 1, Навык 2")
                    .split(",")
                    .map((skill, i) => (
                      <li key={i}>{skill.trim()}</li>
                    ))}
                </ul>
              </div>
            );
          case "certificates":
            return (
              <div key={index}>
                <h2 style={styles.sectionTitle}>Сертификаты</h2>
                <p>
                  <strong>{section.data.name || "Название сертификата"}</strong>{" "}
                  - {section.data.organization || "Организация"} (
                  {section.data.year || "Год"})
                </p>
              </div>
            );
          case "about":
            return (
              <div key={index}>
                <h2 style={styles.sectionTitle}>О себе</h2>
                <p>
                  {section.data.content ||
                    "Краткая информация о вас, ваших интересах и целях."}
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

// Основной компонент приложения
const ResumeEditor = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
  });

  const [sections, setSections] = useState([]);
  const [showAddSection, setShowAddSection] = useState(false);

  // Загрузка данных из localStorage при монтировании
  useEffect(() => {
    const savedResume = localStorage.getItem("resumeData");
    if (savedResume) {
      const { personalInfo: savedPersonalInfo, sections: savedSections } =
        JSON.parse(savedResume);
      setPersonalInfo(savedPersonalInfo);
      setSections(savedSections);
    }
  }, []);

  // Сохранение данных в localStorage при изменении
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
      {/* Левый блок - редактор */}
      <div style={styles.editor}>
        <h2>Персональная информация</h2>
        <div style={styles.section}>
          <div>
            <label>ФИО</label>
            <input
              style={styles.input}
              value={personalInfo.name}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
            />
          </div>
          <div>
            <label>Должность</label>
            <input
              style={styles.input}
              value={personalInfo.title}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, title: e.target.value })
              }
            />
          </div>
          <div>
            <label>Email</label>
            <input
              style={styles.input}
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
            />
          </div>
          <div>
            <label>Телефон</label>
            <input
              style={styles.input}
              value={personalInfo.phone}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, phone: e.target.value })
              }
            />
          </div>
        </div>

        <h2>Секции резюме</h2>
        <button
          style={styles.addButton}
          onClick={() => setShowAddSection(!showAddSection)}
        >
          Добавить секцию
        </button>

        {showAddSection && (
          <div style={styles.section}>
            <h3>Выберите тип секции</h3>
            <button
              style={{ ...styles.addButton, marginRight: "10px" }}
              onClick={() => addSection("experience")}
            >
              Опыт работы
            </button>
            <button
              style={{ ...styles.addButton, marginRight: "10px" }}
              onClick={() => addSection("education")}
            >
              Образование
            </button>
            <button
              style={{ ...styles.addButton, marginRight: "10px" }}
              onClick={() => addSection("skills")}
            >
              Навыки
            </button>
            <button
              style={{ ...styles.addButton, marginRight: "10px" }}
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
          <div key={section.id}>{renderSectionEditor(section, index)}</div>
        ))}
      </div>

      {/* Правый блок - предпросмотр */}
      <div style={styles.preview}>
        <h2>Предпросмотр резюме</h2>
        <ResumePreview personalInfo={personalInfo} sections={sections} />
      </div>
    </div>
  );
};

export default ResumeEditor;
