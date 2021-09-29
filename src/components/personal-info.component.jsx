import React from 'react';
import FormInput from './form-input.component';
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

  // handleChange = (e) => {
  //   console.log('this.state (personal) = ', this.state);

  //   let whichStateProp = e.target.name; // like title or email

  //   this.setState(
  //     (prevState, props) => ({ [whichStateProp]: e.target.value }),
  //     () => {
  //       console.log('after setState this.state (personal) =', this.state);
  //     }
  //   );

  //   // console.log('hi');
  //   // console.log(e);
  //   console.log(e.target);
  //   //e.target.name = name property like title or email
  //   // console.log(e.target.value);
  //   // console.log(e.target.name);
  //   // console.log(`e.target.type = ${e.target.type}`);
  //   // console.log(e.target.aothercssclasses);
  //   // console.log(e.target.aname);
  // };

  render() {
    const handleChange2 = this.props.handleChange2;
    return (
      <form className="personal-info" name="sss">
        {/* <FormInput type="text" handleChange={this.handleChange} name="aname" /> */}
        <label className="personal-info-label">Personal Info</label>
        <p>personal-info this.state.name= {this.state.name}</p>
        <FormInput
          aName="name"
          handleChange={handleChange2}
          // handleChange={this.handleChange}
          label="Name"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />

        <FormInput
          aName="title"
          handleChange={handleChange2}
          // handleChange={this.handleChange}
          label="Title"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="email"
          handleChange={handleChange2}
          // handleChange={this.handleChange}
          label="Email"
          type="email"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="phoneNumber"
          handleChange={handleChange2}
          // handleChange={this.handleChange}
          label="Phone Number"
          type="tel"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />

        <FormInput
          aName="description"
          handleChange={handleChange2}
          // handleChange={this.handleChange}
          label="Description"
          type="text"
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
