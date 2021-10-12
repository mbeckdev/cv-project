import React from 'react';
import './main.styles.scss';
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
    };
  }

  handleChange3 = (e) => {
    // console.log('this.state (entry) = ', this.state);

    let whichStateProp = e.target.name; // like title or email
    // console.log('whichStateProp', whichStateProp);
    // console.log('e.target.value', e.target.value);

    let section = '';
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
      e.target.parentNode.parentNode.parentNode.className === 'experience-info'
    ) {
      console.log('parent ... parent is "experience-info"');
      console.log('this.state now in main is', this.state);
      console.log('e.target', e.target);
      console.log('e.target.value', e.target.value);
      //e.target.name  = position   ex.
      console.log('e.target.parentNode', e.target.parentNode); //form input container
      console.log(
        'e.target.parentNode.parentNode',
        e.target.parentNode.parentNode
      ); //<div id='ksdjfosjdf' class='experience-section'

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

      // experiences: [
      //   {
      //     position: 'Fry Cook',
      //     'main-tasks': 'Cooking fries',
      //     company: 'McBurger King',
      //     city: 'Denver',
      //     from: 'Jan 99',
      //     to: 'Jan 00',
      //     id: uniqid(),
      //   },
      //   {
      //     position: 'Fry Cook2',
      //     'main-tasks': 'Cooking fries2',
      //     company: 'McBurger King2',
      //     city: 'Denver2',
      //     from: 'Jan 00',
      //     to: 'Jan 01',
      //     id: uniqid(),
      //   },
      // ],

      //
      //
      //
      //

      // this.setState(
      //   (prevState, props) => ({
      //     // [section]: { [whichStateProp]: e.target.value },

      //     experiences[0]: {
      //       ...prevState.experiences[0],
      //       [whichStateProp]: e.target.value,
      //     },
      //   }),
      //   () => {
      //     console.log('after setState this.state (entry) =', this.state);
      //   }
      // );
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

    // section = 'personal';

    // this.setState(
    //   (prevState, props) => ({
    //     // [section]: { [whichStateProp]: e.target.value },

    //     [section]: {
    //       ...prevState[section],
    //       [whichStateProp]: e.target.value,
    //     },
    //   }),
    //   () => {
    //     console.log('after setState this.state (entry) =', this.state);
    //   }
    // );
    // console.log(e.target);

    // console.log(e.target.parentNode.parentNode.className);
    // console.log(e.target.parentNode.parentNode.parentNode.className);
    // console.log('yo mama - handle changed just happened!');

    // console.log('hi');
    // console.log(e);
    //e.target.name = name property like title or email
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(`e.target.type = ${e.target.type}`);
    // console.log(e.target.aothercssclasses);
    // console.log(e.target.aname);
  };

  handleAddClick = (e) => {
    e.preventDefault();
    console.log('handle Add Click inside of main');
  };

  setExperience = (e) => {
    this.setState({ experience: e });
  };

  render() {
    return (
      <div className="main-component">
        <EntryComponent
          theState={this.state}
          handleChange3={this.handleChange3}
          handleAddClick={this.handleAddClick}
          setExp={this.setExperience}
        />
        <Preview theState={this.state} />
      </div>
    );
  }
}

export default Main;
