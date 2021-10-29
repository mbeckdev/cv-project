import React from 'react';
import FormInput from './FormInput.component';

const ExperienceSection2 = (props) => {
  return (
    <div
      id={props.theExperience.id}
      className="experience-section"
      key={props.theExperience.id}
    >
      <FormInput
        aName="position"
        handleChange={props.handleChange}
        label="Position"
        type="text"
        value={props.theExperience.position}
      />

      <FormInput
        aName="main-tasks"
        handleChange={props.handleChange}
        label="Main Tasks"
        type="textarea"
        value={props.theExperience['main-tasks']}
      />

      <FormInput
        aName="company"
        handleChange={props.handleChange}
        label="Company"
        type="text"
        value={props.theExperience.company}
      />

      <FormInput
        aName="city"
        handleChange={props.handleChange}
        label="City"
        type="text"
        value={props.theExperience.city}
      />

      <FormInput
        aName="from"
        handleChange={props.handleChange}
        label="From"
        type="text"
        value={props.theExperience.from}
      />

      <FormInput
        aName="to"
        handleChange={props.handleChange}
        label="To"
        type="text"
        value={props.theExperience.to}
      />

      <button
        onClick={(e) =>
          props.handleDeleteSectionClick(e, props.theExperience, 'experience')
        }
      >
        Delete This Experience Section
      </button>
      <br />
    </div>
  );
};

export default ExperienceSection2;
