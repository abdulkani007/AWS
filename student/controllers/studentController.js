const Student = require('../model/student');


exports.createStudent = async (req, res) => {
  try {
    
    const lastStudent = await Student.findOne().sort({ rollno: -1 });

    const nextRollNo = lastStudent ? lastStudent.rollno + 1 : 1;
    req.body.rollno = nextRollNo;

    const student = await Student.create(req.body);
    res.status(201).json(student);

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email or Roll Number already exists" });
    }
    res.status(400).json({ error: error.message });
  }
};


exports.getallStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
