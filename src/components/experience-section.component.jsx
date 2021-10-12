import React from 'react';
import FormInput from './form-input.component';

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

    console.log('this.state', this.state);
  }

  render() {
    // let something = this.state.something;
    // console.log(something);
    console.log('this.state2', this.state);

    const handleChange9 = this.props.handleChange9;

    return (
      <div className="experience-section" key={this.props.key}>
        <p>experience section here</p>

        <FormInput
          aName="position"
          handleChange={handleChange9}
          label="Position"
          type="text"
          // value={this.props.position}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="main-tasks"
          handleChange={handleChange9}
          label="Main Tasks"
          type="textarea"
          // value={this.props['main - task']}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="company"
          handleChange={handleChange9}
          label="Company"
          type="text"
          // value={this.props.company}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="city"
          handleChange={handleChange9}
          label="City"
          type="text"
          // value={this.props.city}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="from"
          handleChange={handleChange9}
          label="From"
          type="date"
          // value={this.props.from}
          // aotherCssClasses="email"
          required
        />
        <FormInput
          aName="to"
          handleChange={handleChange9}
          label="To"
          type="date"
          // value={this.props.to}
          // aotherCssClasses="email"
          required
        />
      </div>
    );
  }
}

// {
// }
// {
/* <FormInput
          aName="position"
          handleChange={handleChange2}
          label="Position"
          type="text"
          // value={this.props.position}
          // aotherCssClasses="email"
          required
        /> */
// }

export default ExperienceSection;
