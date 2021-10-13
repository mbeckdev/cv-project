import React from 'react';
import '../styles/form-input.styles.scss';

const FormInput = ({ handleChange, aName, label, value, type }) => {
  return (
    <div className="form-input-container">
      <input
        className="form-input"
        onChange={handleChange}
        name={aName}
        type={type}
        value={value}
      />
      <label className="form-input-label shrink">{label}</label>
    </div>
  );
};

export default FormInput;
