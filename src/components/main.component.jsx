import React from 'react';
import '../styles/main.styles.scss';
import uniqid from 'uniqid';

import Preview from './Preview.component';
import EntryComponent from './Entry-component.component';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: 'Mario Guy',
        title: 'Plumber and Professional Rescuer',
        email: 'mguy@gmail.com',
        phoneNumber: '123-456-7890',
        description:
          'Looking for a front-end react role coming from a plumbing background',
      },
      experiences: [
        {
          position: 'Fry Cook',
          'main-tasks': 'Cooking fries',
          company: 'McBurger King',
          city: 'Denver',
          from: 'Jan 99',
          to: 'Jan 00',
          id: uniqid(),
        },
        {
          position: 'Plumber',
          'main-tasks': 'Fixing drains',
          company: 'Plumbers R Us',
          city: 'Rome',
          from: 'Feb 00',
          to: 'Feb 01',
          id: uniqid(),
        },
        {
          position: 'Rescuer',
          'main-tasks': 'Fighting crime and rescuing Peach',
          company: "Brother's Fight Stuff",
          city: 'Paris',
          from: 'Mar 02',
          to: 'Mar 03',
          id: uniqid(),
        },
      ],
      educations: [
        {
          school: 'Italian School of Plumbing',
          degree: 'Plumbing',
          from: 'May 67',
          to: 'Jan 85',
          id: uniqid(),
        },
        {
          school: 'School of Hard Knocks',
          degree: 'Rescuing Princesses',
          from: 'May 85',
          to: 'Oct 21',
          id: uniqid(),
        },
      ],
      editButtonIsHidden: false,
    };
  }

  // When you type in a field
  handleChange3 = (e) => {
    let whichStateProp = e.target.name; // like title or email

    let section = '';

    if (e.target.parentNode.parentNode.className === 'personal-info') {
      section = 'personal';
      this.setState((prevState, props) => ({
        [section]: {
          ...prevState[section],
          [whichStateProp]: e.target.value,
        },
      }));
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'education-info'
    ) {
      section = 'educations';
      let labelName = e.target.name;

      //// which experience/education item are we in?
      let educationSectionNode = e.target.parentNode.parentNode;
      let thisEducationId = educationSectionNode.id;
      let thisIndex = this.state.educations.findIndex(
        (item) => item.id === thisEducationId
      );

      let newEducations = this.state.educations;
      newEducations[thisIndex][labelName] = e.target.value;
      this.setState({ educations: newEducations });
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'experience-info'
    ) {
      section = 'experiences';
      let labelName = e.target.name;

      //// which experience are we in????????????
      let thisExperienceId = e.target.parentNode.parentNode.id;
      let thisIndex = this.state.experiences.findIndex(
        (item) => item.id === thisExperienceId
      );

      let newExperiences = this.state.experiences;
      newExperiences[thisIndex][labelName] = e.target.value;
      this.setState({ experiences: newExperiences });
    }
  };

  handleAddSectionClick = (e, educationOrExperience) => {
    e.preventDefault();

    let emptyExperience = {
      position: '',
      'main-tasks': '',
      company: '',
      city: '',
      from: '',
      to: '',
      id: uniqid(),
    };

    let emptyEducation = {
      school: '',
      degree: '',
      from: '',
      to: '',
      id: uniqid(),
    };

    let emptySectionToAdd = {};
    let sectionToSet = '';
    if (educationOrExperience === 'education') {
      emptySectionToAdd = emptyEducation;
      sectionToSet = 'educations';
    } else if (educationOrExperience === 'experience') {
      emptySectionToAdd = emptyExperience;
      sectionToSet = 'experiences';
    } else {
      console.error(
        '"education" or "experience" not properly used in handleAddExperienceClick'
      );
    }

    let newSections = this.state[sectionToSet];

    newSections.push(emptySectionToAdd);

    this.setState({ [sectionToSet]: newSections });
  };

  handleDeleteSectionClick = (
    e,
    thisEducationOrThisExperience,
    educationOrExperience
  ) => {
    e.preventDefault();

    let sectionToSet = '';
    if (educationOrExperience === 'education') {
      sectionToSet = 'educations';
    } else if (educationOrExperience === 'experience') {
      sectionToSet = 'experiences';
    }

    let thisIndex = this.state[sectionToSet].findIndex(
      (item) => item.id === thisEducationOrThisExperience.id
    );
    let newSections = this.state[sectionToSet];
    newSections.splice(thisIndex, 1);
    this.setState({ [sectionToSet]: newSections });
  };

  handleEditButtonClick = (e) => {
    e.preventDefault();
    if (!this.state.editButtonIsHidden) {
      this.setState({ editButtonIsHidden: true });
    }
  };

  handleCloseEditClick = (e) => {
    e.preventDefault();
    if (this.state.editButtonIsHidden) {
      this.setState({ editButtonIsHidden: false });
    }
  };

  render() {
    return (
      <div className="main-component">
        <EntryComponent
          theState={this.state}
          handleChange3={this.handleChange3}
          handleAddSectionClick={this.handleAddSectionClick}
          handleCloseEditClick={this.handleCloseEditClick}
          handleDeleteSectionClick={this.handleDeleteSectionClick}
        />
        <Preview
          theState={this.state}
          handleEditButtonClick={this.handleEditButtonClick}
        />
      </div>
    );
  }
}

export default Main;
