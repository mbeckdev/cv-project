import React from 'react';
import '../styles/entry-component.styles.scss';
import PersonalInfo from './personal-info.component';
import ExperienceInfo from './experience-info.component';

class EntryComponent extends React.Component {
  render() {
    console.log('this.props from entry-component before return', this.props);
    let handleChange3 = this.props.handleChange3;
    let hiddenClassName = !this.props.theState.editButtonIsHidden
      ? 'hidden'
      : '';
    return (
      // <div className={`entry-component`}>
      <div className={`entry-component ${hiddenClassName}`}>
        <PersonalInfo
          personal={this.props.theState.personal}
          handleChange2={handleChange3}
        />

        <ExperienceInfo
          experiences={this.props.theState.experiences}
          handleChange2={handleChange3}
          handleAddExperienceClick={this.props.handleAddExperienceClick}
          handleDeleteExperienceClick={(e, thisExperience) =>
            this.props.handleDeleteExperienceClick(e, thisExperience)
          }
        />
      </div>
    );
  }
}

export default EntryComponent;
