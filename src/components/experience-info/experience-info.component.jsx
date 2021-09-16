import React from 'react';
import FormInput from '../form-input/form-input.component';
import './experience-info.styles.scss';

class ExperienceInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      email: '',
      phoneNumber: '',
      description: '',
    };
  }

  handleChange = (e) => {
    console.log('hi');
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(`e.target.type = ${e.target.type}`);
    // console.log(e.target.aothercssclasses);
    // console.log(e.target.aname);
  };

  render() {
    return (
      <form className="experience-info" name="sss">
        {/* <FormInput type="text" handleChange={this.handleChange} name="aname" /> */}
        <label className="experience-info-label">Experience Info</label>
        <FormInput
          aName="position"
          handleChange={this.handleChange}
          label="Position"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="company"
          handleChange={this.handleChange}
          label="Company"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="city"
          handleChange={this.handleChange}
          label="City"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="from"
          handleChange={this.handleChange}
          label="From"
          type="date"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="to"
          handleChange={this.handleChange}
          label="To"
          type="date"
          // value={this.state.email}
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
