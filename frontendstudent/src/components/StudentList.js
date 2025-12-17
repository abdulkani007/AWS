import { useEffect, useState } from "react";
import { getallStudents, deleteStudent } from "../api";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const res = await getallStudents();
    setStudents(res.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div>
      <h2>Student List</h2>
      <Link to="/add">Add Student</Link>

      <table border="1">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>
                <Link to={`/edit/${s._id}`}>Edit</Link>
                <button onClick={() => handleDelete(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
