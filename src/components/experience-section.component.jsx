import React from 'react';
import FormInput from './Form-input.component';
// import uniqid from 'uniqid';

class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: '',
      'main-tasks': '',
      company: '',
      city: '',
      from: '',
      to: '',
      key: '',
    };

    console.log('this.state in (1)experience constructor', this.state);
    console.log('this.props in (1)experience constructor', this.props);
  }

  render() {
    // let something = this.state.something;
    // console.log(something);
    console.log('this.state2', this.state);

    const handleChange9 = this.props.handleChange9;
    console.log('this.props in experience-section before render', this.props);
    console.log(
      'this.props.theExperience.id in experience-section before render',
      this.props.theExperience.id
    );

    return (
      <div
        id={this.props.theExperience.id}
        className="experience-section"
        key={this.props.theExperience.id}
        // key="asdfjj"
        // =""  hmm
      >
        <FormInput
          aName="position"
          handleChange={handleChange9}
          label="Position"
          type="text"
          value={this.props.theExperience.position}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="main-tasks"
          handleChange={handleChange9}
          label="Main Tasks"
          type="textarea"
          value={this.props.theExperience['main-tasks']}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="company"
          handleChange={handleChange9}
          label="Company"
          type="text"
          value={this.props.theExperience.company}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="city"
          handleChange={handleChange9}
          label="City"
          type="text"
          value={this.props.theExperience.city}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="from"
          handleChange={handleChange9}
          label="From"
          type="text"
          value={this.props.theExperience.from}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="to"
          handleChange={handleChange9}
          label="To"
          type="text"
          value={this.props.theExperience.to}
          // aotherCssClasses="email"
          required
        />
        <button
          onClick={(e) =>
            this.props.handleDeleteSectionClick(
              e,
              this.props.theExperience,
              'experience'
            )
          }
        >
          Delete This Experience Section
        </button>
        <br />
      </div>
    );
  }
}

export default ExperienceSection;
