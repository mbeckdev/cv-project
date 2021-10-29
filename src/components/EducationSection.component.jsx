import React from 'react';

import FormInput from './FormInput.component';

const EducationSection2 = (props) => {
  return (
    <div
      className="education-section"
      id={props.theEducation.id}
      key={props.theEducation.id}
    >
      <FormInput
        aName="school"
        handleChange={props.handleChange}
        label="School"
        type="text"
        value={props.theEducation.school}
      />
      <FormInput
        aName="degree"
        handleChange={props.handleChange}
        label="Degree"
        type="text"
        value={props.theEducation.degree}
      />
      <FormInput
        aName="from"
        handleChange={props.handleChange}
        label="From"
        type="text"
        value={props.theEducation.from}
      />
      <FormInput
        aName="to"
        handleChange={props.handleChange}
        label="To"
        type="text"
        value={props.theEducation.to}
      />

      <button
        onClick={(e) =>
          props.handleDeleteSectionClick(e, props.theEducation, 'education')
        }
      >
        Delete This Education Section
      </button>
    </div>
  );
};

export default EducationSection2;
