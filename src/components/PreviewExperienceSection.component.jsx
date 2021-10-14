import React from 'react';
import '../styles/preview-experience-section.styles.scss';

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
          <p>
            <span className="bolder">{position}</span>
          </p>
          <p>mainTasks: {mainTasks}</p>
        </div>
      </div>
    </div>
  );
}

export default PreviewExperienceSection;
