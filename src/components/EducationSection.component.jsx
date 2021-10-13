import React from 'react';

import FormInput from './Form-input.component';

class EducationSection extends React.Component {
  render() {
    return (
      <div
        className="education-section"
        id={this.props.theEducation.id}
        key={this.props.theEducation.id}
      >
        <FormInput
          aName="school"
          handleChange={this.props.handleChange}
          label="School"
          type="text"
          value={this.props.theEducation.school}
          required
        />
        <FormInput
          aName="degree"
          handleChange={this.props.handleChange}
          label="Degree"
          type="text"
          value={this.props.theEducation.degree}
          required
        />
        <FormInput
          aName="from"
          handleChange={this.props.handleChange}
          label="From"
          type="text"
          value={this.props.theEducation.from}
          required
        />
        <FormInput
          aName="to"
          handleChange={this.props.handleChange}
          label="To"
          type="text"
          value={this.props.theEducation.to}
          required
        />

        <button
          onClick={(e) =>
            this.props.handleDeleteSectionClick(
              e,
              this.props.theEducation,
              'education'
            )
          }
        >
          Delete This Experience Section
        </button>
      </div>
    );
  }
}

export default EducationSection;
