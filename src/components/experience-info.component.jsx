import React from 'react';
import FormInput from './form-input.component';
import './experience-info.styles.scss';

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

  render() {
    const handleChange2 = this.props.handleChange2;
    return (
      <form className="experience-info">
        <label className="experience-info-label">Experience Info</label>
        <FormInput
          aName="position"
          handleChange={handleChange2}
          label="Position"
          type="text"
          // value={this.props.position}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="main-tasks"
          handleChange={handleChange2}
          label="Main Tasks"
          type="textarea"
          // value={this.props['main - task']}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="company"
          handleChange={handleChange2}
          label="Company"
          type="text"
          // value={this.props.company}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="city"
          handleChange={handleChange2}
          label="City"
          type="text"
          // value={this.props.city}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="from"
          handleChange={handleChange2}
          label="From"
          type="date"
          // value={this.props.from}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="to"
          handleChange={handleChange2}
          label="To"
          type="date"
          // value={this.props.to}
          // aotherCssClasses="email"
          required
        />

        {/* <FormInput />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value="name" name="name" />

        <label htmlFor="title">Title</label>
        <input type="text" id="title" value="title" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value="email" />

        <label htmlFor="description">Description</label>
        <input type="text" id="description" value="description" /> */}
      </form>
    );
  }
}

export default ExperienceInfo;
