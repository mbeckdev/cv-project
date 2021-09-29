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
      <p>preview stuff here</p>
      <p>name is {name}</p>
      <p>title is {title}</p>

      <p>email is {email}</p>
      <p>phoneNumber is {phoneNumber}</p>
      <p>description is {description}</p>
      <p>position is {position}</p>
      <p>mainTasks is {mainTasks}</p>
      <p>company is {company}</p>
      <p>city is {city}</p>
      <p>from is {from}</p>
      <p>to is {to}</p>
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
