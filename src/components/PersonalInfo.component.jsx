import React from 'react';
import '../styles/personal-info.styles.scss';

import FormInput from './FormInput.component';

const PersonalInfo2 = (props) => {
  return (
    <div>
      <form className="personal-info" name="sss">
        <label className="personal-info-label">Personal Info</label>

        <FormInput
          aName="name"
          handleChange={props.handleChange}
          label="Name"
          type="text"
          value={props.personal.name}
        />

        <FormInput
          aName="title"
          handleChange={props.handleChange}
          label="Title"
          type="text"
          value={props.personal.title}
        />

        <FormInput
          aName="email"
          handleChange={props.handleChange}
          label="Email"
          type="email"
          value={props.personal.email}
        />

        <FormInput
          aName="phoneNumber"
          handleChange={props.handleChange}
          label="Phone Number"
          type="tel"
          value={props.personal.phoneNumber}
        />

        <FormInput
          aName="description"
          handleChange={props.handleChange}
          label="Description"
          type="text"
          value={props.personal.description}
          required
        />
      </form>
    </div>
  );
};
export default PersonalInfo2;
