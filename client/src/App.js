import React, { Component } from 'react';
import AXIOS from './services/AJAXRequests';
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
      },
      students: [],
    }
  }

  componentDidMount = async() => {
    this.fetchStudents();
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }))
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.createStudent();
    await this.fetchStudents();
  }

  createStudent = async () => {
    try {
      await AXIOS.postStudent(this.state.formData);
      console.log("student created");
      this.setState({
        formData: {
          name: '',
          hometown: '',
          bio: ''
        },
      })
    } catch (e) {
      console.log("student was not created");
      console.log(e.message);
    }
  }

  fetchStudents = async() => {
    try {
      const students = await AXIOS.getStudents();
      this.setState({
        students: students
      })
    } catch (e) {
      console.log(e.message);
      console.log('unable to fetch students');
    }
  }

  render() {
    return (
      <div className="App">
        <h1>University of Octonion</h1>
        <StudentForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name={this.state.formData.name}
          hometown={this.state.formData.hometown}
          bio={this.state.formData.bio}
        />
        <div className= 'students'>
          {this.state.students.map((student, id) => (
            <div className= 'student' key={id}>
              <h4>{student.name}</h4>
              <h6>{student.hometown}</h6>
              <p>{student.bio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
