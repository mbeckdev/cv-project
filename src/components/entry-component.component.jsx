import React from 'react';
import './entry-component.styles.scss';
import PersonalInfo from './personal-info.component';
import ExperienceInfo from './experience-info.component';

class EntryComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: '',
        title: '',
        email: '',
        phoneNumber: '',
        description: '',
      },
      experience: {
        position: '',
        'main-tasks': '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    };

    console.log(this.state);
  }

  // handleChange2 = (e) => {
  //   console.log('this.state (entry) = ', this.state);

  //   let whichStateProp = e.target.name; // like title or email
  //   console.log('whichStateProp', whichStateProp);
  //   console.log('e.target.value', e.target.value);

  //   let section = '';
  //   if (e.target.parentNode.parentNode.className == 'personal-info') {
  //     section = 'personal';
  //   } else if (e.target.parentNode.parentNode.className == 'experience-info') {
  //     section = 'experience';
  //   }
  //   console.log('section', section);
  //   // section = 'personal';

  //   this.setState(
  //     (prevState, props) => ({
  //       // [section]: { [whichStateProp]: e.target.value },

  //       [section]: {
  //         ...prevState[section],
  //         [whichStateProp]: e.target.value,
  //       },
  //     }),
  //     () => {
  //       console.log('after setState this.state (entry) =', this.state);
  //     }
  //   );

  //   // console.log('hi');
  //   // console.log(e);
  //   console.log('yo mama');
  //   console.log(e.target);

  //   console.log(e.target.parentNode.parentNode.className);
  //   //e.target.name = name property like title or email
  //   // console.log(e.target.value);
  //   // console.log(e.target.name);
  //   // console.log(`e.target.type = ${e.target.type}`);
  //   // console.log(e.target.aothercssclasses);
  //   // console.log(e.target.aname);
  // };

  render() {
    let handleChange3 = this.props.handleChange3;
    return (
      <div className="entry-component">
        <PersonalInfo
          personal={this.state.personal}
          handleChange2={handleChange3}
        />

        <ExperienceInfo
          experience={this.state.experience}
          handleChange2={handleChange3}
        />
      </div>
    );
  }
}

export default EntryComponent;
