import React from 'react';
import './preview.styles.scss';

const Preview = (props) => {
  // console.log('dem thestate= ', otherProps);
  // console.log('asdf');
  // console.log(props);
  let name = props.theState.personal.name;
  let title = props.theState.personal.title;
  let email = props.theState.personal.email;
  let phoneNumber = props.theState.personal.phoneNumber;
  let description = props.theState.personal.description;
  let position = props.theState.experiences[0].position;
  let mainTasks = props.theState.experiences[0]['main-tasks'];
  let company = props.theState.experiences[0].company;
  let city = props.theState.experiences[0].city;
  let from = props.theState.experiences[0].from;
  let to = props.theState.experiences[0].to;

  return (
    <div className="preview">
      <div className="personal-section">
        <div className="name-in-title">{name}</div>

        <div className="title-and-email-and-phone">
          <div className="the-title">{title}</div>

          <div className="name-and-email">
            <p>Email: {email}</p>
            <p>Phone: {phoneNumber}</p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="description section">
          <h2>Description</h2>
          <hr />
          <p>{description}</p>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <hr />
          <div className="experience-section">
            <div className="company-and-dates">
              <p>
                {company}, {city}
              </p>

              <p>
                {from} - {to}
              </p>
            </div>
            <div className="position-and-tasks">
              <p>{position}</p>

              <p>{mainTasks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// class Preview extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.state = this.props.theState;
//   }

//   render() {
//     return (
//       <div className="preview">
//         <p>preview stuff here</p>
//         <p>title is {this.props.theState.personal.title}</p>
//       </div>
//     );
//   }
// }

export default Preview;
