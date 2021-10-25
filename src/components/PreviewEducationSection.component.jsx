import React from 'react';
import '../styles/preview-education-section.styles.scss';

function PreviewEducationSection({ education: { school, degree, from, to } }) {
  let theseStyles = { margin: '10px 0' };

  return (
    <div className="preview-education-section" style={theseStyles}>
      <div className="education-section">
        <div className="company-and-dates">
          <p>{school},</p>

          <p>
            {from} - {to}
          </p>
        </div>
        <div className="degree">
          <span className="bolder">{degree}</span>
        </div>
      </div>
    </div>
  );
}

export default PreviewEducationSection;
