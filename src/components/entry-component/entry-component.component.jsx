import React from 'react';
import './entry-component.styles.scss';
import PersonalInfo from '../personal-info/personal-info.component';

const EntryComponent = () => {
  return (
    <div className="entry-component">
      <PersonalInfo />
    </div>
  );
};

export default EntryComponent;
