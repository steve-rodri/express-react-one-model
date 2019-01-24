import React from 'react';

export default function Student(props) {
  const student = props.student;
  return (
    <div className= 'student'>
      <h4>{student.name}</h4>
      <h6>Hometown: {student.hometown}</h6>
      <p>{student.bio}</p>
      <button onClick={props.onDelete}>
        Delete
      </button>
    </div>
  )
}
