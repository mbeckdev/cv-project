import React from 'react';
import '../styles/form-input.styles.scss';

const FormInput = ({ label, value, handleChange, type, aName }) => {
  // let
  return (
    <div className="form-input-container">
      <input
        className="form-input"
        onChange={handleChange}
        name={aName}
        // name={props.personal.name}
        type={type}
        value={value}
      />
      <label className="form-input-label shrink">{label}</label>
    </div>
  );
};
// const FormInput = ({ handleChange, aName, label, value, type }) => {
//   return (
//     <div className="form-input-container">
//       <input
//         className="form-input"
//         onChange={handleChange}
//         name={aName}
//         type={type}
//         value={value}
//       />
//       <label className="form-input-label shrink">{label}</label>
//     </div>
//   );
// };

export default FormInput;
