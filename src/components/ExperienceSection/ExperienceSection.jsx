import React from "react";

const ExperienceSection = ({ data, onChange, onDelete, styles }) => {
  return (
    <div>
      <h3>Опыт работы</h3>
      <div>
        <label style={styles.label}>Должность</label>
        <input
          style={styles.input}
          value={data.position || ""}
          onChange={(e) => onChange({ ...data, position: e.target.value })}
        />
      </div>
      <div>
        <label style={styles.label}>Компания</label>
        <input
          style={styles.input}
          value={data.company || ""}
          onChange={(e) => onChange({ ...data, company: e.target.value })}
        />
      </div>
      <div>
        <label style={styles.label}>Период</label>
        <input
          style={styles.input}
          value={data.period || ""}
          onChange={(e) => onChange({ ...data, period: e.target.value })}
        />
      </div>
      <div>
        <label style={styles.label}>Описание</label>
        <textarea
          style={styles.textarea}
          value={data.description || ""}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
