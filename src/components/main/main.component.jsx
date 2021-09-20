import React from 'react';
import './main.styles.scss';

import Preview from '../preview/preview.component';
import EntryComponent from '../entry-component/entry-component.component';

// const Main = () => {
//   return (

//   );
// };

class Main extends React.Component {
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
        position: 'asdf',
        mainTasks: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    };
  }

  setExperience = (e) => {
    this.setState({ experience: e });
  };

  render() {
    return (
      <div className="main-component">
        <EntryComponent theState={this.state} setExp={this.setExperience} />
        <Preview theState={this.state} />
      </div>
    );
  }
}

export default Main;
