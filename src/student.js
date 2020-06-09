import React from 'react';


function Student(props) {
  return (
    <div>
      <h1>my name is {props.studentName} i study in {props.studentEdu}</h1>
    </div>

  );
}

export default Student;
