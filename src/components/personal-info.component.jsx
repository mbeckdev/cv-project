import React from 'react';
import '../styles/personal-info.styles.scss';

import FormInput from './Form-input.component';

class PersonalInfo extends React.Component {
  render() {
    const handleChange2 = this.props.handleChange2;
    return (
      <form className="personal-info" name="sss">
        <label className="personal-info-label">Personal Info</label>

        <FormInput
          aName="name"
          handleChange={handleChange2}
          label="Name"
          type="text"
          value={this.props.name}
          required
        />

        <FormInput
          aName="title"
          handleChange={handleChange2}
          label="Title"
          type="text"
          value={this.props.title}
          required
        />
        <FormInput
          aName="email"
          handleChange={handleChange2}
          label="Email"
          type="email"
          value={this.props.email}
          required
        />
        <FormInput
          aName="phoneNumber"
          handleChange={handleChange2}
          label="Phone Number"
          type="tel"
          value={this.props.phoneNumber}
          required
        />

        <FormInput
          aName="description"
          handleChange={handleChange2}
          label="Description"
          type="text"
          value={this.props.description}
          required
        />
      </form>
    );
  }
}

export default PersonalInfo;
