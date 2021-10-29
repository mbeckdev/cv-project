import React, { useState } from 'react';
import '../styles/main.styles.scss';
import uniqid from 'uniqid';

import Preview2 from './Preview.component';
import EntryComponent2 from './Entry-component.component';

function Main2() {
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
    if (!editButtonIsHidden) {
      setEditButtonIsHidden(true);
    }
  };

  const handleCloseEditClick = (e) => {
    e.preventDefault();
    if (editButtonIsHidden) {
      setEditButtonIsHidden(false);
    }
  };

  // When you type in a field
  const handleChange = (e) => {
    let whichStateProp = e.target.name; // like title or email
    // let section = '';

    if (e.target.parentNode.parentNode.className === 'personal-info') {
      // section = 'personal';

      // let changedPersonal = personal;
      let changedPersonal = { ...personal, [whichStateProp]: e.target.value };
      setPersonal(changedPersonal);
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'education-info'
    ) {
      let labelName = e.target.name;
      //// which experience/education item are we in?
      let educationSectionNode = e.target.parentNode.parentNode;
      let thisEducationId = educationSectionNode.id;
      let thisIndex = educations.findIndex(
        (item) => item.id === thisEducationId
      );
      let newEducations = educations;
      newEducations[thisIndex][labelName] = e.target.value;
      setEducations([...newEducations]);
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'experience-info'
    ) {
      let labelName = e.target.name;

      //// which experience are we in????????????
      let thisExperienceId = e.target.parentNode.parentNode.id;
      let thisIndex = experiences.findIndex(
        (item) => item.id === thisExperienceId
      );

      let newExperiences = experiences;
      newExperiences[thisIndex][labelName] = e.target.value;
      setExperiences([...newExperiences]);
    }
  };

  const findMyIndex = (inWhat, whatId) => {
    let theIndex = inWhat.findIndex((item) => item.id === whatId);
    return theIndex;
  };

  const handleDeleteSectionClick = (
    e,
    thisEducationOrThisExperience,
    educationOrExperience
  ) => {
    e.preventDefault();

    if (educationOrExperience === 'education') {
      let newEducations = educations;
      let thisIndex = findMyIndex(
        newEducations,
        thisEducationOrThisExperience.id
      );
      newEducations.splice(thisIndex, 1);
      setEducations([...newEducations]);
    } else if (educationOrExperience === 'experience') {
      let newExperiences = experiences;
      let thisIndex = findMyIndex(
        newExperiences,
        thisEducationOrThisExperience.id
      );
      newExperiences.splice(thisIndex, 1);
      // we have to use this way instead of
      // setExperiences(newExperiences) I think because
      // splice mutates the array
      setExperiences([...newExperiences]);
    }
  };

  const handleAddSectionClick = (e, educationOrExperience) => {
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

    if (educationOrExperience === 'education') {
      let newEducations = [...educations, emptyEducation];
      setEducations(() => [...newEducations]);
    } else if (educationOrExperience === 'experience') {
      let newExperiences = [...experiences, emptyExperience];
      setExperiences(() => [...newExperiences]);
    } else {
      console.error(
        '"education" or "experience" not properly used in handleAddExperienceClick'
      );
    }
  };

  return (
    <div className="main-component">
      <EntryComponent2
        personal={personal}
        experiences={experiences}
        educations={educations}
        editButtonIsHidden={editButtonIsHidden}
        handleChange={handleChange}
        handleAddSectionClick={handleAddSectionClick}
        handleCloseEditClick={handleCloseEditClick}
        handleDeleteSectionClick={handleDeleteSectionClick}
      />
      <Preview2
        personal={personal}
        experiences={experiences}
        educations={educations}
        editButtonIsHidden={editButtonIsHidden}
        handleEditButtonClick={handleEditButtonClick}
      />
    </div>
  );
}

export default Main2;
