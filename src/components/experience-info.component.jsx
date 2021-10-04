import React from 'react';
import FormInput from './form-input.component';
import './experience-info.styles.scss';
import ExperienceSection from './experience-section.component';

class ExperienceInfo extends React.Component {
  constructor(props) {
    super(props);

    // this.state = this.props.experience;
    this.state = {
      position: '',
      'main-tasks': '',
      company: '',
      city: '',
      from: '',
      to: '',
    };
  }

  handleAddClick = (e) => {
    e.preventDefault();
    console.log('handle add click');
  };

  render() {
    const handleChange2 = this.props.handleChange2;
    return (
      <form className="experience-info">
        <label className="experience-info-label">Experience Info</label>

        <ExperienceSection handleChange9={handleChange2} />
        <p>old experience section starts here</p>

        <div className="button-container">
          <button onClick={this.handleAddClick}>Add New Section</button>
        </div>
      </form>
    );
  }
}

export default ExperienceInfo;
