const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

//GET students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json({
      students
    })
  } catch (e) {
    console.log(e.message);
    res.sendStatus(404);
  }
});

//GET student
app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json({
      student
    })
  } catch (e) {
    console.log(e.message);
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
