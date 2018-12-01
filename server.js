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

//POST student
app.post('/students', async (req, res) => {
  try {
    await Student.create(req.body);
    res.json({
      msg: "Student Created"
    })
  } catch (e) {
    console.log(e.message);
    res.sendStatus(404);
  }
});

//DELETE student
app.delete('/students/:id', async (req, res) => {
  try {
    await Student.destroy({
      where: {
        id: id
      }
    });
    res.json({
      msg: "Student Deleted"
    })
  } catch (e) {
    console.log(e.message);
    res.sendStatus(404);
  }
});

//PUT student
app.put('/student/:id', async (req, res) => {
  try {
    const student = await Student.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      msg: "Student Updated"
    })
  } catch (e) {
    console.log(e.message);
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
