import React from 'react';
import './form-input.styles.scss';

const FormInput = ({
  handleChange,
  aName,
  label,
  // aotherCssClasses,
  ...otherProps
}) => {
  return (
    <div className="form-input-container">
      <input
        className="form-input"
        onChange={handleChange}
        name={aName}
        {...otherProps}
      />
      <label className="form-input-label">{label}</label>

      {/* {label ? (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null} */}
    </div>
  );
};

export default FormInput;

// const FormInput = ({ handleChange, label, ...otherProps }) => (
//   <div className="group">
//     <input className="form-input" onChange={handleChange} {...otherProps} />
//     {label ? (
//       <label
//         className={`${
//           otherProps.value.length ? 'shrink' : ''
//         } form-input-label`}
//       >
//         {label}
//       </label>
//     ) : null}
//   </div>
// );
