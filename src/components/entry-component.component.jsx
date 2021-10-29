import React, { useEffect } from 'react';
import '../styles/entry-component.styles.scss';
import PersonalInfo2 from './Personal-info.component';
import ExperienceInfo2 from './Experience-info.component';
import EducationInfo2 from './Education-info.component';

const EntryComponent2 = (props) => {
  let hiddenClassName = !props.editButtonIsHidden ? 'hidden' : '';

  return (
    <div className={`entry-component ${hiddenClassName}`}>
      <button id="close-entry-component" onClick={props.handleCloseEditClick}>
        X
      </button>

      <PersonalInfo2
        personal={props.personal}
        handleChange={props.handleChange}
      />

      <ExperienceInfo2
        experiences={props.experiences}
        handleChange={props.handleChange}
        handleAddSectionClick={props.handleAddSectionClick}
        handleDeleteSectionClick={props.handleDeleteSectionClick}
      />

      <EducationInfo2
        educations={props.educations}
        handleChange={props.handleChange}
        handleDeleteSectionClick={props.handleDeleteSectionClick}
        handleAddSectionClick={props.handleAddSectionClick}
      />
    </div>
  );
};
export default EntryComponent2;
