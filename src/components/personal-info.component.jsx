import React from 'react';
import '../styles/personal-info.styles.scss';

import FormInput from './Form-input.component';

const PersonalInfo2 = (props) => {
  console.log('props from personal-info2', props);
  return (
    <div>
      <div>personal info stuff</div>
      <form className="personal-info" name="sss">
        <label className="personal-info-label">Personal Info</label>

        <FormInput
          aName="name"
          handleChange={props.handleChange}
          label="Name"
          type="text"
          value={props.personal.name}
          // required
        />

        <FormInput
          aName="title"
          handleChange={props.handleChange}
          label="Title"
          type="text"
          value={props.personal.title}
          required
        />
        <FormInput
          aName="email"
          handleChange={props.handleChange}
          label="Email"
          type="email"
          value={props.personal.email}
          required
        />
        <FormInput
          aName="phoneNumber"
          handleChange={props.handleChange}
          label="Phone Number"
          type="tel"
          value={props.personal.phoneNumber}
          required
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
