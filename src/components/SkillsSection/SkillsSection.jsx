import React from "react";

const SkillsSection = ({ data, onChange, onDelete, styles }) => {
  return (
    <div>
      <h3>Навыки</h3>
      <div>
        <label style={styles.label}>Список навыков (через запятую)</label>
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

export default SkillsSection;
