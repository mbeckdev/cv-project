import React from 'react';
import './entry-component.styles.scss';
import PersonalInfo from '../personal-info/personal-info.component';
import ExperienceInfo from '../experience-info/experience-info.component';

const EntryComponent = () => {
  return (
    <div className="entry-component">
      <PersonalInfo />
      <ExperienceInfo />
    </div>
  );
};

export default EntryComponent;
