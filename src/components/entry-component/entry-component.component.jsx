import React, { createFactory } from 'react';
import './entry-component.styles.scss';
import PersonalInfo from '../personal-info/personal-info.component';
import ExperienceInfo from '../experience-info/experience-info.component';

// const EntryComponent = (props) => {
//   return (
//     <div className="entry-component">
//       <PersonalInfo />
//       <ExperienceInfo experience={props.experience} />
//     </div>
//   );
// };

class EntryComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.theState;
    console.log(this.state);
  }

  render() {
    return (
      <div className="entry-component">
        <PersonalInfo personal={this.state.personal} />
        <ExperienceInfo experience={this.state.experience} />
        <p>hiyarr {this.state.experience.position}</p>
      </div>
    );
  }
}

export default EntryComponent;
