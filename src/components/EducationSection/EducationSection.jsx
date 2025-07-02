import React from "react";

const EducationSection = ({ data, onChange, onDelete, styles }) => {
  return (
    <div>
      <h3>Образование</h3>
      <div>
        <label style={styles.label}>Учебное заведение</label>
        <input
          style={styles.input}
          value={data.institution || ""}
          onChange={(e) => onChange({ ...data, institution: e.target.value })}
        />
      </div>
      <div>
        <label style={styles.label}>Специальность</label>
        <input
          style={styles.input}
          value={data.specialty || ""}
          onChange={(e) => onChange({ ...data, specialty: e.target.value })}
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
    </div>
  );
};

export default EducationSection;
