import React, { Component } from 'react';
import './App.css';

import Student from './components/Student';
import StudentForm from './components/StudentForm';

import AXIOS from './services/AJAXRequests';

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

  handleDelete = async (id) => {
    await this.deleteStudent(id);
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
    }
  }

  fetchStudents = async() => {
    try {
      const students = await AXIOS.getStudents();
      this.setState({
        students: students
      })
    } catch (e) {
      console.log('unable to fetch students');
    }
  }

  deleteStudent = async(student, id) => {
    try {
      await AXIOS.deleteStudent(student);
      const students = [...this.state.students];
      students.slice(id, 1);
      this.setState({
        students: students
      })
    } catch (e) {
      console.log('unable to delete student');
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
            <Student
              student={student}
              key={student.id}
              onDelete={() => this.handleDelete(student.id, id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
