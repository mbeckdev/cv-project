import React from 'react';
import '../styles/preview.styles.scss';

import PreviewExperienceSection from './PreviewExperienceSection.component';
import PreviewEducationSection from './PreviewEducationSection.component';

const Preview = (props) => {
  let name = props.theState.personal.name;
  let title = props.theState.personal.title;
  let email = props.theState.personal.email;
  let phoneNumber = props.theState.personal.phoneNumber;
  let description = props.theState.personal.description;
  let extraHiddenClass = props.theState.editButtonIsHidden ? 'hidden' : '';

  return (
    <div className="preview">
      <button
        id="preview-edit-button"
        className={`${extraHiddenClass}`}
        onClick={props.handleEditButtonClick}
      >
        Edit
      </button>
      <div className="personal-section">
        <div className="name-in-title">{name}</div>

        <div className="title-and-email-and-phone">
          <div className="the-title">{title}</div>

          <div className="name-and-email">
            <p>Email: {email}</p>
            <p>Phone: {phoneNumber}</p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="description section">
          <h2>Description</h2>
          <hr />
          <p>{description}</p>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <hr />

          {props.theState.experiences.map((experience) => (
            <div key={experience.id}>
              <PreviewExperienceSection experience={experience} />
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Education</h2>
          <hr />

          {props.theState.educations.map((education) => (
            <div key={education.id}>
              <PreviewEducationSection education={education} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
