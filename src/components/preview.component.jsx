import React from 'react';
import '../styles/preview.styles.scss';

const Preview = (props) => {
  // console.log('dem thestate= ', otherProps);
  // console.log('asdf');
  // console.log(props);
  let name = props.theState.personal.name;
  let title = props.theState.personal.title;
  let email = props.theState.personal.email;
  let phoneNumber = props.theState.personal.phoneNumber;
  let description = props.theState.personal.description;
  // let position = props.theState.experiences[0].position;
  // let mainTasks = props.theState.experiences[0]['main-tasks'];
  // let company = props.theState.experiences[0].company;
  // let city = props.theState.experiences[0].city;
  // let from = props.theState.experiences[0].from;
  // let to = props.theState.experiences[0].to;
  console.log('preview see props === ', props);
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
              {/* <div>position={experience.position}</div> */}
              <PreviewExperienceSection experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;

function PreviewExperienceSection(props) {
  let position = props.experience.position;
  // let position = props.theState.experiences[0].position;
  let mainTasks = props.experience['main-tasks'];
  let company = props.experience.company;
  let city = props.experience.city;
  let from = props.experience.from;
  let to = props.experience.to;

  let theseStyles = { margin: '10px 0' };

  return (
    <div className="preview-experience-section" style={theseStyles}>
      <div className="experience-section">
        <div className="company-and-dates">
          <p>
            {company}, {city}
          </p>

          <p>
            {from} - {to}
          </p>
        </div>
        <div className="position-and-tasks">
          <p>{position}</p>
          <p>mainTasks: {mainTasks}</p>
        </div>
      </div>
    </div>
  );
}

// export { PreviewExperienceSection };

// export default PreviewExperienceSection
