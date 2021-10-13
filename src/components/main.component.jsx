import React from 'react';
import '../styles/main.styles.scss';
import uniqid from 'uniqid';

import Preview from './preview.component';
import EntryComponent from './entry-component.component';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: 'Bartholemew Lollipop',
        title: 'Front end React developer',
        email: 'bLollipop@gmail.com',
        phoneNumber: '123-456-7890',
        description:
          'Looking for that first front-end react role coming from a mechanical engineering background',
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
          city: 'Barcelona',
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
          to: 'Jan 72',
          id: uniqid(),
        },
        {
          school: 'School of Hard Knocks',
          degree: 'Rescuing Princesses',
          from: 'May2 72',
          to: 'Jan2 74',
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

    console.log('**********************************');

    if (e.target.parentNode.parentNode.className === 'personal-info') {
      section = 'personal';
      this.setState(
        (prevState, props) => ({
          [section]: {
            ...prevState[section],
            [whichStateProp]: e.target.value,
          },
        }),
        () => {
          console.log('after setState this.state (entry) =', this.state);
        }
      );
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'education-info'
    ) {
      console.log('education info change');

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
      console.log('thisExperienceId = ', thisExperienceId);
      let thisIndex = this.state.experiences.findIndex(
        (item) => item.id === thisExperienceId
      );

      console.log('thisEXPERIENCE = ', this.state.experiences[thisIndex]);
      console.log('this index = ', thisIndex);

      let newExperiences = this.state.experiences;
      newExperiences[thisIndex][labelName] = e.target.value;
      this.setState({ experiences: newExperiences });
    }

    console.log(
      'e.target.parentNode.parentNode.className',
      e.target.parentNode.parentNode.className
    );
    console.log(
      'e.target.parentNode.parentNode.parentNode.className',
      e.target.parentNode.parentNode.parentNode.className
    );
    console.log('section', section);
    console.log('e.target.value', e.target.value);
  };

  handleAddSectionClick = (e, educationOrExperience) => {
    e.preventDefault();
    console.log('handle Add Experience Click inside of main');

    let emptyExperience = {
      position: 'durrrrr',
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
      console.log('--emptySEctionToAdd', emptySectionToAdd);
      sectionToSet = 'educations';
    } else if (educationOrExperience === 'experience') {
      emptySectionToAdd = emptyExperience;
      console.log('--emptySEctionToAdd', emptySectionToAdd);
      sectionToSet = 'experiences';
    } else {
      console.error(
        '"education" or "experience" not properly used in handleAddExperienceClick'
      );
    }

    let newSections = this.state[sectionToSet];

    newSections.push(emptySectionToAdd);
    console.log('heh newSections = ', newSections);

    this.setState({ [sectionToSet]: newSections }, () =>
      console.log('after setting sections, this.state = ', this.state)
    );
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
    console.log('handleEditButtonClick');
    if (!this.state.editButtonIsHidden) {
      this.setState({ editButtonIsHidden: true }, () => {
        console.log('eek');
        console.log('aa');
      });
    }
  };

  handleCloseEditClick = (e) => {
    e.preventDefault();
    console.log('editclose');
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
