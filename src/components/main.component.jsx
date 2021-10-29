import React, { useState, useEffect } from 'react';
import '../styles/main.styles.scss';
import uniqid from 'uniqid';

import Preview, { Preview2 } from './Preview.component';
import EntryComponent, { EntryComponent2 } from './Entry-component.component';

function Main2() {
  // const [something, setSomething] = useState('iniital');
  // const [state, setState] = useState();
  const [personal, setPersonal] = useState({
    name: 'Mario Guy',
    title: 'Plumber and Professional Rescuer',
    email: 'mguy@gmail.com',
    phoneNumber: '123-456-7890',
    description:
      'Looking for a front-end react role coming from a plumbing background',
  });
  const [experiences, setExperiences] = useState([
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
  ]);
  const [educations, setEducations] = useState([
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
  ]);
  const [editButtonIsHidden, setEditButtonIsHidden] = useState(false);

  const handleEditButtonClick = (e) => {
    e.preventDefault();
    console.log('asdfdf');
    if (!editButtonIsHidden) {
      setEditButtonIsHidden(true);
    }
  };

  const handleCloseEditClick = (e) => {
    e.preventDefault();
    if (editButtonIsHidden) {
      console.log(
        'about to set editbuttonishidden to false, its = ',
        editButtonIsHidden
      );
      setEditButtonIsHidden(false);
    }
  };

  // When you type in a field
  const handleChange = (e) => {
    let whichStateProp = e.target.name; // like title or email
    let section = '';

    if (e.target.parentNode.parentNode.className === 'personal-info') {
      console.log('main says in personal section');
      // section = 'personal';

      // let changedPersonal = personal;
      let changedPersonal = { ...personal, [whichStateProp]: e.target.value };
      setPersonal(changedPersonal);
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'education-info'
    ) {
      console.log('main says in educations section');
      // section = 'educations';

      let labelName = e.target.name;
      //// which experience/education item are we in?
      let educationSectionNode = e.target.parentNode.parentNode;
      let thisEducationId = educationSectionNode.id;
      let thisIndex = educations.findIndex(
        (item) => item.id === thisEducationId
      );
      // let thisIndex = this.state.educations.findIndex(
      //   (item) => item.id === thisEducationId
      // );
      let newEducations = educations;
      // let newEducations = this.state.educations;
      newEducations[thisIndex][labelName] = e.target.value;
      setEducations(newEducations);
      // this.setState({ educations: newEducations });
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'experience-info'
    ) {
      console.log('main says in experiences section');
      //   section = 'experiences';
      let labelName = e.target.name;
      //// which experience are we in????????????
      let thisExperienceId = e.target.parentNode.parentNode.id;
      let thisIndex = experiences.findIndex(
        (item) => item.id === thisExperienceId
      );

      // With Hooks and functional components
      let newExperiences = experiences;
      newExperiences[thisIndex][labelName] = e.target.value;
      setExperiences(newExperiences);

      // With class components
      // let newExperiences = this.state.experiences;
      // newExperiences[thisIndex][labelName] = e.target.value;
      // this.setState({ experiences: newExperiences });
    }
  };

  const findMyIndex = (inWhat, whatId) => {
    console.log('finding index');
    let theIndex = inWhat.findIndex((item) => item.id === whatId);
    return theIndex;
  };

  const handleDeleteSectionClick = (
    e,
    thisEducationOrThisExperience,
    educationOrExperience
  ) => {
    e.preventDefault();
    console.log('delete section click clicked');

    let sectionToSet = '';
    if (educationOrExperience === 'education') {
      // sectionToSet = educations;
      let newEducations = educations;
      let thisIndex = findMyIndex(
        newEducations,
        thisEducationOrThisExperience.id
      );
      newEducations.splice(thisIndex, 1);
      setEducations(newEducations);
    } else if (educationOrExperience === 'experience') {
      // sectionToSet = experiences;
      let newExperiences = experiences;
      let thisIndex = findMyIndex(
        newExperiences,
        thisEducationOrThisExperience.id
      );
      newExperiences.splice(thisIndex, 1);
      // we have to use this way instead of
      // setExperiences(newExperiences) I think because
      // splice mutates the array
      // setExperiences(() => [...newExperiences]);
      setExperiences(newExperiences);
    }

    let thisIndex = [sectionToSet].findIndex(
      (item) => item.id === thisEducationOrThisExperience.id
    );
    console.log('thisIndex from main handle dlete ', thisIndex);
    console.log('sectionToSet ', sectionToSet);
    console.log('sectionToSet[0] ', sectionToSet[0]);
    console.log('educationOrExperience ', educationOrExperience);
    // console.log('[sectionToSet] ', [sectionToSet]);
    // console.log('{[sectionToSet]} ',{[sectionToSet]});
    // console.log('experiences ', experiences);

    // let newSections = this.state[sectionToSet];
    // newSections.splice(thisIndex, 1);
    // this.setState({ [sectionToSet]: newSections });
  };

  useEffect(() => {
    console.log('editbuttonishidden is now = ', editButtonIsHidden);
  }, [editButtonIsHidden]);

  return (
    <div className="main-component" style={{ backgroundColor: 'grey' }}>
      <div>NEW MAIN2 STARTS HERE USING FUNCTIONAL COMPONENTS</div>
      <EntryComponent2
        // theState={this.state}
        personal={personal}
        experiences={experiences}
        educations={educations}
        editButtonIsHidden={editButtonIsHidden}
        // handleChange3={this.handleChange3}
        handleChange={handleChange}
        // handleAddSectionClick={this.handleAddSectionClick}
        handleCloseEditClick={handleCloseEditClick}
        handleDeleteSectionClick={handleDeleteSectionClick}
      />
      <Preview2
        personal={personal}
        experiences={experiences}
        educations={educations}
        editButtonIsHidden={editButtonIsHidden}
        handleEditButtonClick={handleEditButtonClick}
        // theState={this.state}
        // handleEditButtonClick={this.handleEditButtonClick}
      />
    </div>
  );
}

export { Main2 };

// old Main starts here

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
