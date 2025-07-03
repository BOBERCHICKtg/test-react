import React from "react";

const ResumePreview = ({ personalInfo, sections, styles }) => {
  return (
    <div style={styles.resume}>
      <div style={styles.header}>
        <h1>{personalInfo.name || "Ваше имя"}</h1>
        <p>{personalInfo.title || "Ваша должность"}</p>
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <span>{personalInfo.email || "email@example.com"}</span>
          <span>{personalInfo.phone || "+7 (123) 456-7890"}</span>
        </div>
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
                <p style={{ whiteSpace: "pre-line" }}>
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
                <ul style={{ paddingLeft: "20px" }}>
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
                <p style={{ whiteSpace: "pre-line" }}>
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

export default ResumePreview;
