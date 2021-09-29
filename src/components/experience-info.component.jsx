import React from 'react';
import FormInput from './form-input.component';
import './experience-info.styles.scss';

class ExperienceInfo extends React.Component {
  constructor(props) {
    super(props);

    // this.state = this.props.experience;
    this.state = {
      position: 'asdf',
      'main-tasks': '',
      company: '',
      city: '',
      from: '',
      to: '',
    };

    // name: '',
    // title: '',
    // email: '',
    // phoneNumber: '',
    // description: '',

    // position: '',
    // mainTasks: '',
    // company: '',
    // city: '',
    // from: '',
    // to: '',
  }

  // handleChange = (e) => {
  //   // console.log('hi');
  //   // console.log(e);
  //   // console.log(e.target);
  //   // console.log(e.target.value);
  //   // console.log(e.target.name);
  //   // console.log(`e.target.type = ${e.target.type}`);

  //   const value = e.target.value;
  //   const name = e.target.name;
  //   this.setState({ [name]: value }, () => {
  //     console.log(this.state);
  //   });

  //   // console.log(e.target.aothercssclasses);
  //   // console.log(e.target.aname);
  // };

  render() {
    const handleChange2 = this.props.handleChange2;
    return (
      <form className="experience-info" name="sss">
        {/* <FormInput type="text" handleChange={this.handleChange} name="aname" /> */}
        <label className="experience-info-label">Experience Info</label>
        <FormInput
          aName="position"
          handleChange={handleChange2}
          label="Position"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="main-tasks"
          handleChange={handleChange2}
          label="Main Tasks"
          type="textarea"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="company"
          handleChange={handleChange2}
          label="Company"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="city"
          handleChange={handleChange2}
          label="City"
          type="text"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="from"
          handleChange={handleChange2}
          label="From"
          type="date"
          // value={this.state.email}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="to"
          handleChange={handleChange2}
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
