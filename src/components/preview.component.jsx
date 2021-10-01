import { buildQueries } from '@testing-library/dom';
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
  let position = props.theState.experience.position;
  let mainTasks = props.theState.experience['main-tasks'];
  let company = props.theState.experience.company;
  let city = props.theState.experience.city;
  let from = props.theState.experience.from;
  let to = props.theState.experience.to;

  return (
    <div className="preview">
      <div className="personal-section">
        <div className="nameTitle">{name}</div>

        <div
          className="title-and-email-and-phone"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            textAlign: 'right',
            backgroundColor: '#154c79',
          }}
        >
          <div
            className="theTitle"
            style={{
              fontSize: 'larger',
              textAlign: 'left',
              backgroundColor: '#154c79',
              paddingLeft: '10px',
            }}
          >
            {title}
          </div>

          <div className="name-and-email">
            <p
              style={{
                textAlign: 'right',
                backgroundColor: '#154c79',
                paddingRight: '10px',
              }}
            >
              Email: {email}
            </p>
            <p
              style={{
                textAlign: 'right',
                backgroundColor: '#154c79',
                paddingRight: '10px',
              }}
            >
              Phone: {phoneNumber}
            </p>
          </div>
        </div>
      </div>

      <div
        className="bottom-section"
        style={{
          margin: 'auto 10px',
        }}
      >
        <div
          className="description"
          style={{ textAlign: 'left', marginTop: '1rem' }}
        >
          <h2 style={{}}>Description</h2>
          <hr style={{ margin: '2px 0', border: '1px solid grey' }} />
          <p style={{ textAlign: 'left' }}>{description}</p>
        </div>

        <h2>Experience</h2>
        <div className="experience-section">
          <p>position is {position}</p>
          <p>mainTasks is {mainTasks}</p>
          <p>company is {company}</p>
          <p>city is {city}</p>
          <p>from is {from}</p>
          <p>to is {to}</p>
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
