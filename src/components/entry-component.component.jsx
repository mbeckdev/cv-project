import React from 'react';
import '../styles/entry-component.styles.scss';
import PersonalInfo from './Personal-info.component';
import ExperienceInfo from './Experience-info.component';
import EducationInfo from './Education-info.component';

class EntryComponent extends React.Component {
  render() {
    let handleChange3 = this.props.handleChange3;
    let hiddenClassName = !this.props.theState.editButtonIsHidden
      ? 'hidden'
      : '';
    return (
      <div className={`entry-component ${hiddenClassName}`}>
        <button
          id="close-entry-component"
          onClick={this.props.handleCloseEditClick}
        >
          X
        </button>
        <PersonalInfo
          personal={this.props.theState.personal}
          handleChange2={handleChange3}
        />

        <ExperienceInfo
          experiences={this.props.theState.experiences}
          handleChange2={handleChange3}
          handleAddSectionClick={this.props.handleAddSectionClick}
          handleDeleteSectionClick={this.props.handleDeleteSectionClick}
        />

        <EducationInfo
          educations={this.props.theState.educations}
          handleChange2={handleChange3}
          handleDeleteSectionClick={this.props.handleDeleteSectionClick}
          handleAddSectionClick={this.props.handleAddSectionClick}
        />
      </div>
    );
  }
}

export default EntryComponent;
