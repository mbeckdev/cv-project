import React from 'react';
import '../styles/education-info.styles.scss';

import EducationSection2 from './EducationSection.component';

function EducationInfo2(props) {
  return (
    <form className="education-info">
      <div className="education-info-title">Education Info</div>

      {props.educations.map((education) => (
        <EducationSection2
          handleChange={props.handleChange}
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

export default EducationInfo2;
