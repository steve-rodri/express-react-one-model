import React from 'react';

import './StudentForm.css'

function StudentForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="StudentForm">
      <label>
        Name:
        <input type='text'
          name='name'
          value={props.name}
          onChange={props.onChange} />
      </label>
      <label>
        Hometown:
        <input
          type='text'
          name='hometown'
          value={props.hometown}
          onChange={props.onChange} />
      </label>
      <label>
        Bio:
        <textarea
          name='bio'
          value={props.bio}
          onChange={props.onChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default StudentForm;
