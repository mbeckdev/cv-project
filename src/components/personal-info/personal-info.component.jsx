import React from 'react';
import FormInput from '../form-input/form-input.component';
import './personal-info.styles.scss';

class PersonalInfo extends React.Component {
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
      <form className="personal-info" name="sss">
        {/* <FormInput type="text" handleChange={this.handleChange} name="aname" /> */}
        <label className="personal-info-label">Personal Info</label>
        <FormInput
          aName="name"
          handleChange={this.handleChange}
          label="Name"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="title"
          handleChange={this.handleChange}
          label="Title"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="emaileer"
          handleChange={this.handleChange}
          label="Email"
          type="email"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="phone-number"
          handleChange={this.handleChange}
          label="Phone Number"
          type="tel"
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

export default PersonalInfo;
