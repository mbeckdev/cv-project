import React from 'react';
import '../styles/preview-education-section.styles.scss';

function PreviewEducationSection({ education: { school, degree, from, to } }) {
  let theseStyles = { margin: '10px 0' };

  return (
    <div className="preview-education-section" style={theseStyles}>
      <div className="education-section">
        <div className="company-and-dates">
          <p>
            {school}, <span className="bolder">{degree}</span>
          </p>

          <p>
            {from} - {to}
          </p>
        </div>
        <div className="position-and-tasks"></div>
      </div>
    </div>
  );
}

export default PreviewEducationSection;
