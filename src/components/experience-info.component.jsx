import React from 'react';
// import FormInput from './form-input.component';
import './experience-info.styles.scss';
import ExperienceSection from './experience-section.component';

class ExperienceInfo extends React.Component {
  render() {
    const handleChange2 = this.props.handleChange2;
    console.log('this.props from experience-info before return', this.props);
    console.log(
      'this.props.experiences from experience-info before return',
      this.props.experiences
    );

    this.props.experiences.map((experience) =>
      console.log('www', experience.position)
    );

    return (
      <form className="experience-info">
        <label className="experience-info-label">Experience Info</label>
        {this.props.experiences.map((experience) => (
          <ExperienceSection
            handleChange9={handleChange2}
            key={experience.id}
            theExperience={experience}
          />
        ))}

        <p>old experience section starts here</p>

        <div className="button-container">
          <button onClick={this.props.handleAddClick}>Add New Section</button>
        </div>
      </form>
    );
  }
}

export default ExperienceInfo;
