import React, { Component } from 'react';
import './App.css';

import StudentForm from './components/StudentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        hometown: '',
        bio: ''
      }
    }
  }

  handleChange = (e) => {
    // TODO: update state.formData when input fields change
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST state.formData to your server's /students path
  }

  render() {
    return (
      <div className="App">
        <h1>University of Octonion</h1>
        {/* TODO: create a StudentsList component that renders all students fetched from server */}
        <StudentForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name={this.state.formData.name}
          hometown={this.state.formData.hometown}
          bio={this.state.formData.bio}
        />
      </div>
    );
  }
}

export default App;
