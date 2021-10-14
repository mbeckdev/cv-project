import React from 'react';
import '../styles/personal-info.styles.scss';

import FormInput from './Form-input.component';

class PersonalInfo extends React.Component {
  render() {
    const handleChange2 = this.props.handleChange2;
    console.log('this.props from personal-info', this.props);
    return (
      <form className="personal-info" name="sss">
        <label className="personal-info-label">Personal Info</label>

        <FormInput
          aName="name"
          handleChange={handleChange2}
          label="Name"
          type="text"
          value={this.props.personal.name}
          required
        />

        <FormInput
          aName="title"
          handleChange={handleChange2}
          label="Title"
          type="text"
          value={this.props.personal.title}
          required
        />
        <FormInput
          aName="email"
          handleChange={handleChange2}
          label="Email"
          type="email"
          value={this.props.personal.email}
          required
        />
        <FormInput
          aName="phoneNumber"
          handleChange={handleChange2}
          label="Phone Number"
          type="tel"
          value={this.props.personal.phoneNumber}
          required
        />

        <FormInput
          aName="description"
          handleChange={handleChange2}
          label="Description"
          type="text"
          value={this.props.personal.description}
          required
        />
      </form>
    );
  }
}

export default PersonalInfo;
