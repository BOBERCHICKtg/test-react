import React from "react";

const CertificatesSection = ({ data, onChange, onDelete, styles }) => {
  return (
    <div>
      <h3>Сертификаты</h3>
      <div>
        <label style={styles.label}>Название сертификата</label>
        <input
          style={styles.input}
          value={data.name || ""}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
        />
      </div>
      <div>
        <label style={styles.label}>Организация</label>
        <input
          style={styles.input}
          value={data.organization || ""}
          onChange={(e) => onChange({ ...data, organization: e.target.value })}
        />
      </div>
      <div>
        <label style={styles.label}>Год получения</label>
        <input
          style={styles.input}
          value={data.year || ""}
          onChange={(e) => onChange({ ...data, year: e.target.value })}
        />
      </div>
    </div>
  );
};

export default CertificatesSection;
