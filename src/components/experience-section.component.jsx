import React from 'react';
import FormInput from './Form-input.component';

const ExperienceSection2 = (props) => {
  return (
    <div
      id={props.theExperience.id}
      className="experience-section"
      key={props.theExperience.id}
    >
      <FormInput
        aName="position"
        handleChange={props.handleChange}
        label="Position"
        type="text"
        value={props.theExperience.position}
        required
      />
      {/* 
        <FormInput
          aName="main-tasks"
          handleChange={handleChange9}
          label="Main Tasks"
          type="textarea"
          value={this.props.theExperience['main-tasks']}
          required
        />
        <FormInput
          aName="company"
          handleChange={handleChange9}
          label="Company"
          type="text"
          value={this.props.theExperience.company}
          required
        />
        <FormInput
          aName="city"
          handleChange={handleChange9}
          label="City"
          type="text"
          value={this.props.theExperience.city}
          required
        />
        <FormInput
          aName="from"
          handleChange={handleChange9}
          label="From"
          type="text"
          value={this.props.theExperience.from}
          required
        />
        <FormInput
          aName="to"
          handleChange={handleChange9}
          label="To"
          type="text"
          value={this.props.theExperience.to}
          required
        />
        */}
      <button
        onClick={(e) =>
          props.handleDeleteSectionClick(e, props.theExperience, 'experience')
        }
      >
        Delete This Experience Section
      </button>
      <br />
    </div>
  );
};

export { ExperienceSection2 };

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
  }

  render() {
    const handleChange9 = this.props.handleChange9;

    return (
      <div
        id={this.props.theExperience.id}
        className="experience-section"
        key={this.props.theExperience.id}
      >
        <FormInput
          aName="position"
          handleChange={handleChange9}
          label="Position"
          type="text"
          value={this.props.theExperience.position}
          required
        />
        <FormInput
          aName="main-tasks"
          handleChange={handleChange9}
          label="Main Tasks"
          type="textarea"
          value={this.props.theExperience['main-tasks']}
          required
        />
        <FormInput
          aName="company"
          handleChange={handleChange9}
          label="Company"
          type="text"
          value={this.props.theExperience.company}
          required
        />
        <FormInput
          aName="city"
          handleChange={handleChange9}
          label="City"
          type="text"
          value={this.props.theExperience.city}
          required
        />
        <FormInput
          aName="from"
          handleChange={handleChange9}
          label="From"
          type="text"
          value={this.props.theExperience.from}
          required
        />
        <FormInput
          aName="to"
          handleChange={handleChange9}
          label="To"
          type="text"
          value={this.props.theExperience.to}
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
