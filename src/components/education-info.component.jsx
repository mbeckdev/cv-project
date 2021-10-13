import React from 'react';

import EducationSection from './EducationSection.component';

function EducationInfo(props) {
  return (
    <form className="education-info">
      <div className="education-info-title">Education Info</div>

      {props.educations.map((education) => (
        <EducationSection
          handleChange={props.handleChange2}
          id={education.id}
          key={education.id}
          theEducation={education}
          handleDeleteSectionClick={props.handleDeleteSectionClick}
        />
      ))}

      <button
        onClick={(e) => {
          props.handleAddSectionClick(e, 'education');
        }}
      >
        Add New Education Section
      </button>
    </form>
  );
}

export default EducationInfo;
