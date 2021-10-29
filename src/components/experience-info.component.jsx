import React from 'react';
import '../styles/experience-info.styles.scss';
import ExperienceSection, {
  ExperienceSection2,
} from './Experience-section.component';

const ExperienceInfo2 = (props) => {
  return (
    <form className="experience-info">
      <label className="experience-info-label">Experience Info</label>
      {props.experiences.map((experience) => (
        <ExperienceSection2
          handleChange={props.handleChange}
          handleDeleteSectionClick={props.handleDeleteSectionClick}
          key={experience.id}
          theExperience={experience}
        />
      ))}

      {/* <div className="button-container">
          <button
            onClick={(e) => {
              this.props.handleAddSectionClick(e, 'experience');
            }}
          >
            Add New Experience Section
          </button>
        </div> */}
    </form>
  );
};

export { ExperienceInfo2 };

class ExperienceInfo extends React.Component {
  render() {
    const handleChange2 = this.props.handleChange2;

    return (
      <form className="experience-info">
        <label className="experience-info-label">Experience Info</label>
        {this.props.experiences.map((experience) => (
          <ExperienceSection
            handleChange9={handleChange2}
            handleDeleteSectionClick={this.props.handleDeleteSectionClick}
            key={experience.id}
            theExperience={experience}
          />
        ))}

        <div className="button-container">
          <button
            onClick={(e) => {
              this.props.handleAddSectionClick(e, 'experience');
            }}
          >
            Add New Experience Section
          </button>
        </div>
      </form>
    );
  }
}

export default ExperienceInfo;
