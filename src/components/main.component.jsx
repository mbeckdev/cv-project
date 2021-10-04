import React from 'react';
import './main.styles.scss';

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
      experience: {
        position: 'Fry Cook',
        'main-tasks': 'Cooking fries',
        company: 'McBurger King',
        city: 'Denver',
        from: 'Jan 99',
        to: 'Jan 00',
      },
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
    } else if (
      e.target.parentNode.parentNode.parentNode.className === 'experience-info'
    ) {
      section = 'experience';
    }
    console.log('section', section);

    // section = 'personal';

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
