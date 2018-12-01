const axios = require('axios');

const BASE_URL = 'http://localhost:3001/';
const STUDENTS = 'students/';

const AXIOS = {

  getStudents: async function (){
    try {
      const resp = await axios.get(BASE_URL + STUDENTS);
      console.log(resp.data.students);
      return resp.data.students;
    } catch (e) {
      console.log(e.message);
    }
  },

  getStudent: async function (id) {
    try {
      const resp = await axios.get(BASE_URL + STUDENTS + id);
      console.log(resp.data.student);
      return resp.data.student;
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default AXIOS
