import React, { useEffect } from 'react';
import '../styles/entry-component.styles.scss';
import PersonalInfo, { PersonalInfo2 } from './Personal-info.component';
import ExperienceInfo, { ExperienceInfo2 } from './Experience-info.component';
import EducationInfo from './Education-info.component';

const EntryComponent2 = (props) => {
  // let

  console.log('props from entrycomponent2', props);
  console.log('editbuttonishidden = asdfasdf ', props.editButtonIsHidden);
  let hiddenClassName = !props.editButtonIsHidden ? 'hidden' : '';
  // useEffect(() => {
  //   console.log('does this wrok');
  //   hiddenClassName = !props.editButtonIsHidden ? 'hidden' : '';
  //   console.log('hiddenclassname = ', hiddenClassName);
  // });
  // hiddenClassName = '';

  return (
    <div>
      <div>entry component 2 stuff here</div>
      <div>entry component 2 stuff here</div>
      <div>entry component 2 stuff here</div>
      <div className={`entry-component ${hiddenClassName}`}>
        <button id="close-entry-component" onClick={props.handleCloseEditClick}>
          X
        </button>

        <PersonalInfo2
          personal={props.personal}
          // handleChange2={handleChange3}
          handleChange={props.handleChange}
        />

        <ExperienceInfo2
          experiences={props.experiences}
          handleChange={props.handleChange}
          handleAddSectionClick={props.handleAddSectionClick}
          handleDeleteSectionClick={props.handleDeleteSectionClick}
        />
        {/* 
        <EducationInfo
          educations={this.props.theState.educations}
          handleChange2={handleChange3}
          handleDeleteSectionClick={this.props.handleDeleteSectionClick}
          handleAddSectionClick={this.props.handleAddSectionClick}
        /> */}
      </div>
    </div>
  );
};
export { EntryComponent2 };

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
