import React from 'react';
import '../styles/main.styles.scss';
import uniqid from 'uniqid';

import Preview from './preview.component';
import EntryComponent from './entry-component.component';

// const Main = () => {
//   return (

//   );
// };

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
          position: 'Fry Cook2',
          'main-tasks': 'Cooking fries2',
          company: 'McBurger King2',
          city: 'Denver2',
          from: 'Jan 00',
          to: 'Jan 01',
          id: uniqid(),
        },
        {
          position: 'Fry Cook3',
          'main-tasks': 'Cooking fries2',
          company: 'McBurger King2',
          city: 'Denver2',
          from: 'Jan 00',
          to: 'Jan 01',
          id: uniqid(),
        },
      ],
      educations: [
        {
          school: 'happy school',
          degree: 'master chef',
          from: 'May 67',
          to: 'Jan 42',
          id: uniqid(),
        },
        {
          school: 'happy school2',
          degree: 'master chef2',
          from: 'May2 67',
          to: 'Jan2 42',
          id: uniqid(),
        },
      ],
      editButtonIsHidden: false,
    };
  }

  handleChange3 = (e) => {
    // console.log('this.state (entry) = ', this.state);

    let whichStateProp = e.target.name; // like title or email
    // console.log('whichStateProp', whichStateProp);
    // console.log('e.target.value', e.target.value);

    let section = '';

    console.log('**********************************');
    // console.log(
    //   'e.target.parentNode.parentNode.className',
    //   e.target.parentNode.parentNode.className
    // );
    // console.log(
    //   'e.target.parentNode.parentNode.parentNode.className',
    //   e.target.parentNode.parentNode.parentNode.className
    // );
    // console.log(
    //   'e.target.parentNode.parentNode',
    //   e.target.parentNode.parentNode
    // );

    if (e.target.parentNode.parentNode.className === 'personal-info') {
      section = 'personal';
      this.setState(
        (prevState, props) => ({
          // [section]: { [whichStateProp]: e.target.value },

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
      // console.log('labelName = ', e.target.name);

      //// which experience are we in????????????
      // console.log('educations e.target.parentNode', e.target.parentNode);
      // console.log(
      //   'educations e.target.parentNode.parentNode',
      //   e.target.parentNode.parentNode
      // ); //'education-section'
      // console.log(
      //   'educations e.target.parentNode.parentNode.parentNode',
      //   e.target.parentNode.parentNode.parentNode
      // ); //'education-info'
      let educationSectionNode = e.target.parentNode.parentNode;
      let thisEducationId = educationSectionNode.id;
      // let thisEducationId = e.target.parentNode.parentNode.id;
      // console.log('thisEducationId = ', thisEducationId);
      let thisIndex = this.state.educations.findIndex(
        (item) => item.id === thisEducationId
      );

      // console.log('this education index = ', thisIndex);
      // console.log('this.state right now = ', this.state);
      // console.log('thisEDUCATION = ', this.state.educations[thisIndex]);
      // console.log('this index = ', thisIndex);

      let newEducations = this.state.educations;
      newEducations[thisIndex][labelName] = e.target.value;
      // newExperiences[thisIndex].position = 'durrr';
      this.setState({ educations: newEducations });
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'experience-info'
    ) {
      // console.log('parent ... parent is "experience-info"');
      // console.log('this.state now in main is', this.state);
      // console.log('e.target', e.target);
      // console.log('e.target.value', e.target.value);
      // //e.target.name  = position   ex.
      // console.log('e.target.parentNode', e.target.parentNode); //form input container
      // console.log(
      //   'e.target.parentNode.parentNode',
      //   e.target.parentNode.parentNode
      // ); //<div id='ksdjfosjdf' class='experience-section'

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
      // newExperiences[thisIndex].position = 'durrr';
      this.setState({ experiences: newExperiences });
      //  this.setState((prevState)=>({[section]:...prevState[section],{}}));
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

  handleAddExperienceClick = (e) => {
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

    console.log('eek, this.state in main = ', this.state);
    let newExperiences = this.state.experiences;
    newExperiences.push(emptyExperience);
    console.log('heh newExperiences = ', newExperiences);

    this.setState({ experiences: newExperiences }, () =>
      console.log('after setting expereinces, this.state = ', this.state)
    );
  };

  handleDeleteExperienceClick = (e, thisExperience) => {
    e.preventDefault();
    // console.log('handleDeleteExperienceClick');
    // console.log(e.target);
    // console.log('thisExperience = ', thisExperience);

    // find the index of it
    let thisIndex = this.state.experiences.findIndex(
      (item) => item.id === thisExperience.id
    );

    let newExperiences = this.state.experiences;
    // newExperiences[thisIndex]
    newExperiences.splice(thisIndex, 1);

    this.setState({ experiences: newExperiences });

    console.log('e.target', e.target);
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
          handleAddExperienceClick={this.handleAddExperienceClick}
          handleDeleteExperienceClick={(e, thisExperience) =>
            this.handleDeleteExperienceClick(e, thisExperience)
          }
          handleCloseEditClick={this.handleCloseEditClick}
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
