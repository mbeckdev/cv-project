import React from 'react';
import '../styles/experience-info.styles.scss';
import ExperienceSection2 from './ExperienceSection.component';

const ExperienceInfo2 = (props) => {
  return (
    <form className="experience-info">
      <label className="experience-info-label">Experience Info</label>
      {props.experiences.map((experience) => (
        <ExperienceSection2
          handleChange={props.handleChange}
          handleDeleteSectionClick={props.handleDeleteSectionClick}
          key={experience.id}
          theExperience={experience}
        />
      ))}

      <div className="button-container">
        <button
          onClick={(e) => {
            props.handleAddSectionClick(e, 'experience');
          }}
        >
          Add New Experience Section
        </button>
      </div>
    </form>
  );
};

export default ExperienceInfo2;
