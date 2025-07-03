import React from "react";

const AboutSection = ({ data, onChange, onDelete, styles }) => {
  return (
    <div>
      <h3>О себе</h3>
      <div>
        <label style={styles.label}>Информация о себе</label>
        <textarea
          style={styles.textarea}
          value={data.content || ""}
          onChange={(e) => onChange({ ...data, content: e.target.value })}
        />
      </div>
    </div>
  );
};

export default AboutSection;
